/// <reference path="../../../tsd.d.ts" />

module <%= projectName %>.about {
    'use strict';

    export interface IAboutModel extends angular.IScope {

    }

    class AboutController {

        constructor($scope: IAboutModel) {
            // constructor
        }
    }

    angular.module('<%= projectName %>.about')
        .controller('<%= projectName %>.about.AboutController', AboutController);
}
