/// <reference path="../../tsd.d.ts" />

((app): void => {

    app.config(config);

    app.run(run);

    app.controller('AppController', controller);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider : angular.ui.IStateProvider,
        $urlrouteProvider : angular.ui.IUrlRouterProvider) : void {
        $urlrouteProvider.otherwise('/home');
    }

    controller.$inject = ['$scope'];

    function controller($scope : angular.IScope) : void {
        // controller
    }

    function run() {
        // run app
    }

})(angular.module("<%= projectName %>", [
    '<%= projectName %>.home',
    '<%= projectName %>.about',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
]));
