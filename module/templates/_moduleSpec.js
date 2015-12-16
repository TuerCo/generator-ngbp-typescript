/// <reference path="../../../tsd.d.ts" />

describe('<%= camelModuleName %> section', function () {

    beforeEach(angular.mock.module('<%= projectName %>.<%= camelModuleName %>'));

    beforeEach(inject(function ($controller, _$location_, $rootScope) {
        expect(true).toBeTruthy();
    }));

    it('should pass a dummy test', inject(function () {
        expect(true).toBeTruthy();
    }));
});

