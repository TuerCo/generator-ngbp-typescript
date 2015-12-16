/// <reference path="../../../tsd.d.ts" />

((module: angular.IModule): void => {

    module.config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider: angular.ui.IStateProvider) {
        $stateProvider.state('about', {
            url: '/about',
            views: {
                'main': {
                    controller: '<%= projectName %>.about.AboutController',
                    controllerAs: 'model',
                    templateUrl: 'about/about.tpl.html'
                }
            },
            data: {
                pageTitle: 'About'
            }
        });
    }

})(angular.module('<%= projectName %>.about', [
    'ui.router'
]));
