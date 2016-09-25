/// <reference path="angular.min.js" />


var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {

    $scope.message = "Click the button";
    $scope.myfunc = function () {
        alert ("Button is double  clicked");
    };

         
    }); 

