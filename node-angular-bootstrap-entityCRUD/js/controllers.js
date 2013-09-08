'use strict';

function PersonCtrl($scope, Persons) {
    $scope.persons = Persons.getAll();
    $scope.orderProp = "id";
}
function PersonAddCtrl($scope, $location, Persons) {
    $scope.save = function() {
        Persons.create($scope.person,
            function () { // success
                console.log("Person created!")
            });
        $location.path("/person/list");
    }
}
function PersonEditCtrl($scope, $routeParams, $location, Persons) {
    $scope.person = Persons.get({id: $routeParams.id});

    $scope.save = function() {
        Persons.save($scope.person,
            function () { // success
                console.log("Person updated!")
            });
        $location.path("/person/list");
    }
    $scope.delete = function() {
        var answer = confirm("Are you sure you want to delete \"" + $scope.person.firstName + " " + $scope.person.lastName + "\"?");
        if (answer) {
            Persons.delete({id: $routeParams.id},
                function () { // success
                    console.log("Person deleted!")
                });
            $location.path("/person/list");
        }
    }
}