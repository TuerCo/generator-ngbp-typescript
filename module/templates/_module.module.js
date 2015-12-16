/// <reference path="../../../tsd.d.ts" />
((module) : void => {
    'use strict';
    module.config(config);

    // Dependencies
    config.$inject = ['$stateProvider'];

    function config($stateProvider : angular.ui.IStateProvider) {
        $stateProvider.state('<%= routeFriendlyName %>', {
            url : '/<%= kebabModuleName %>',
            views : {
                "main" : {
                    controller : '<%= projectName %>.<%= camelModuleName %>.<%= capitalModuleName %>Controller',
                    controllerAs : 'model',
                    templateUrl : '<%= path %>/<%= kebabModuleName %>.tpl.html'
                }
            },
            data : {
                pageTitle : '<%= capitalModuleName %>'
            }
        });
    }

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
})(angular.module('<%= projectName %>.<%= camelModuleName %>', [
    'ui.router'
]));
