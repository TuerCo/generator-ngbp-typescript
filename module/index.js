'use strict';
var util = require('util');
var path = require('path');
var touch = require('touch');
var yeoman = require('yeoman-generator');
var inflector = require('inflected');
var _ = require('lodash');


var ModuleGenerator = yeoman.generators.NamedBase.extend({
    init: function () {
        console.log('Creating the module - ' + this.name);
    },

    askFor: function () {
        var done = this.async();
        var prompts = [];
        // confirm with user if this module is a sub module (dot notation)
        if (this.name.indexOf('.') !== -1) {
            var parent = this.name.substr(0, this.name.lastIndexOf('.'));
            prompts.push({
                name: 'isSubmodule',
                message: 'Looks like ' + this.name + ' is a submodule, do you want to create it in ' + parent + ' module?',
                default: 'y'
            });
        }
        prompts.push({
            name: 'rootFolder',
            message: 'Where do you want to place this module - what is the root folder?',
            default: 'app'
        });

        this.prompt(prompts, function (props) {
            this.rootFolder = props.rootFolder;
            this.isSubmodule = props.isSubmodule == 'y';

            done();
        }.bind(this));
    },

    files: function () {
        var modulePath;
        this.projectName = this.config.get('projectName');
        var self = this;
        var capitalModuleName = [];
        // controller name cannot have a dot or dash in it and must be unique in the app
        this.name.split(/[\.-]/).forEach(function (value) {
            capitalModuleName.push(self._.capitalize(value));
        });

        this.capitalModuleName = capitalModuleName.join('');
        this.routeFriendlyName = this.name.replace('.', '-');
        this.camelModuleName = _.camelCase(this.capitalModuleName, false);
        this.resourceInstance = inflector.singularize(this.camelModuleName);
        this.resourceName = this._.capitalize(this.resourceInstance);
        this.kebabModuleName = _.kebabCase(this.name);
        this.singularKebabModuleName = _.kebabCase(inflector.singularize(this.name));

        if (this.isSubmodule) {
            this.lowerModuleName = this.name.toLowerCase().replace('.', '/');
            this.filePrefix = this.name.substr(this.name.lastIndexOf('.') + 1);
            this.path = this.name.replace(/\./g, '/')
            modulePath = path.join('src', this.rootFolder, this.path);

            this.resourceInstance = inflector.singularize(_.camelCase(this._.capitalize(this.filePrefix), false));
            this.resourceName = this._.capitalize(this.resourceInstance);
            this.singularKebabModuleName = _.kebabCase(inflector.singularize(this.filePrefix));

        } else {
            this.lowerModuleName = this.name.toLowerCase();
            this.filePrefix = this.name;
            this.path = this.name;
            modulePath = path.join('src', this.rootFolder, this.name);
        }
        this.mkdir(modulePath);

        this.template('_module.module.js', path.join(modulePath, this.filePrefix + '.module.ts'));
        this.template('_module.js', path.join(modulePath, this.filePrefix + '.ts'));
        this.template('_moduleSpec.js', path.join(modulePath, this.filePrefix + '.spec.ts'));
        this.template('_module.less', path.join(modulePath, this.filePrefix + '.less'));
        this.template('_module.tpl.html', path.join(modulePath, this.filePrefix + '.tpl.html'));

        this._addModuleToAppJs(this.projectName, this.camelModuleName, this.lowerModuleName);

        //        if (this.includeRestfulService) {
        //            // Add RESTful service stuff here
        //        }
    },

    touchIndexHtml: function () {
        // Touch the index.html file to force the index grunt task to rebuild it (that task adds the new module to the scripts)
        var indexHtmlFilePath = 'src/index.html';
        touch(indexHtmlFilePath, {
            mtime: true
        });
    },

    _addModuleToAppJs: function app(projectName, camelModuleName, lowerModuleName) {
        var hook = ']));',
            path = 'src/app/app.ts',
            insert = "    '" + projectName + "." + camelModuleName + "',\n";

        var file = this.readFileAsString(path);

        if (file.indexOf(insert) === -1) {
            this.write(path, file.replace(hook, insert + hook));
        }
    }

});

module.exports = ModuleGenerator;
