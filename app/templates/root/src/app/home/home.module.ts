/// <reference path="../../../tsd.d.ts" />

/**
 * Each module has a <moduleName>.module.js file.  This file contains the angular module declaration -
 * angular.module("moduleName", []);
 * The build system ensures that all the *.module.js files get included prior to any other .js files, which
 * ensures that all module declarations occur before any module references.
 */
((module) : void => {
    'use strict';
    module.config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider : angular.ui.IStateProvider) {
        $stateProvider.state('home', {
            url : '/home',
            views : {
                "main" : {
                    controller : '<%= projectName %>.home.HomeController',
                    controllerAs : 'model',
                    templateUrl : 'home/home.tpl.html'
                }
            },
            data : {
                pageTitle : 'Home'
            }
        });
    }

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
})(angular.module("<%= projectName %>.home", [
    'ui.router'
]));
