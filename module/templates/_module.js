/// <reference path="../../../tsd.d.ts" />
module <%= projectName %>.<%= camelModuleName %> {
    'use strict';

    interface I<%= capitalModuleName %> {
        title: string;
    }

    class <%= capitalModuleName %>Controller implements I<%= capitalModuleName %> {
        // Dependencies that will be injected
        static $inject = [
        ];

        title: string;

        constructor() {
            var model = this;
            init();

            function init() {
                model.title = '<%= camelModuleName %>';
                return;
            }
        }
    }
    angular.module('<%= projectName %>.<%= camelModuleName %>')
        .controller('<%= projectName %>.<%= camelModuleName %>.<%= capitalModuleName %>Controller', <%= capitalModuleName %>Controller);
}
