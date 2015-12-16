/// <reference path="../../../tsd.d.ts" />
/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * 'src/app/home', however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a 'note' section could have the submodules 'note.create',
 * 'note.delete', 'note.edit', etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 */
module <%= projectName %>.home {
    'use strict';

    interface IHomeModel {
        colorVar: string;
        someList: string[];
        someFunctionUsedByTheHomePage(): void;
    }

    class HomeController implements IHomeModel {
        static $inject = [
        ];

        colorVar: string;
        someList: string[];

        constructor() {
            var model = this;
            init();

            function init() {
                model.colorVar = 'blue';
                model.someList = ['one', 'two', 'three'];
            }
        }

        someFunctionUsedByTheHomePage(): void {
            alert("Congratulations");
        }
    }
    angular.module('<%= projectName %>.home')
        .controller('<%= projectName %>.home.HomeController', HomeController);
}
