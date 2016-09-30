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

    app.service('ShoppingListService', ShoppingListService);

    ShoppingListCheckOffController.$inject = ['ShoppingListService'];

    function ShoppingListCheckOffController(ShoppingListService) {

        var checkOffList = this;

        checkOffList.toBuyList = toBuyList;
        console.log(checkOffList.toBuyList);

        checkOffList.removeItem = function () {



        };
    }

    function ShoppingListService() {

        var service = this;

        var items = [];

    }

}) ();
