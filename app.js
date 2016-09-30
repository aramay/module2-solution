(function () {

    'use strict';

    var toBuyList = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "5"
      }
    ];

    var app = angular.module('ShoppingList', []);

    app.controller('ShoppingListCheckOffController', ShoppingListCheckOffController);

    ShoppingListCheckOffController.$inject = ['$scope'];

    function ShoppingListCheckOffController($scope) {

        $scope.toBuyList = toBuyList;
        console.log($scope.toBuyList);

        $scope.removeItem = function () {



        };
    }

}) ();
