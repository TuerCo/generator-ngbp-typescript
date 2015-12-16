/// <reference path="../../../tsd.d.ts" />

module <%= projectName %>.<%= camelModuleName %> {
    'use strict';

    interface I<%= resourceName %>FormController {
    }


    class <%= resourceName %>FormController implements I<%= resourceName %>FormController {
        static $inject = ["$scope"];

        constructor($scope: angular.IScope) {
            // constructor
        }
    }

    '<%= resourceInstance %>Form'.$inject = ['$timeout'];

    function '<%= resourceInstance %>Form'($timeout: angular.ITimeoutService): angular.IDirective {

        var directive = <angular.IDirective> {
            scope: {},
            restrict: 'E',
            controller: '<%= resourceName %>FormController',
            controllerAs: 'model',
            templateUrl: '<%= lowerModuleName %>/directives/<%= resourceInstance %>Form.tpl.html',
            bindToController: true
        };
        return directive;
    }

    angular
        .module('<%= projectName %>.<%= camelModuleName %>')
        .directive(''<%= resourceInstance %>Form'', '<%= resourceInstance %>Form')
        .controller("'<%= projectName %>.<%= camelModuleName %>.<%= resourceName %>FormController", <%= resourceName %>FormController);
}
