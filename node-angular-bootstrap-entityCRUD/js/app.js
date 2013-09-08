'use strict';

angular.module('blkAdm', ['blkAdmService'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/',
                {templateUrl: 'templates/home.html'})

            .when('/person/list',
                {templateUrl: 'templates/persons.html', controller: PersonCtrl})
            .when('/person/add',
                {templateUrl: 'templates/personForm.html', controller: PersonAddCtrl})
            .when('/person/:id/edit',
                {templateUrl: 'templates/personForm.html', controller: PersonEditCtrl})

            .otherwise({redirectTo: '/'});
    }]);