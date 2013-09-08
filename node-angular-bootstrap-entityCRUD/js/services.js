var blkAdmService = angular.module('blkAdmService', ['ngResource'])

blkAdmService.factory('Persons', function($resource){
    return $resource('/admin-loc/persons/:id', {}, {
        getAll: {method:'GET', params:{id:'all'}, isArray:true},
        save: {method: "PUT", params: {id: "@personalIdentifier"}},
        create: {method: "POST"},
        delete: {method: "DELETE", params: {id: "@id"}}
    });
});