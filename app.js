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
    },
      {
        name: "Oranges",
        quantity: "12"
      }
    ];

    var app = angular.module('ShoppingList', []);

    app.controller('ShoppingListCheckOffController', ShoppingListCheckOffController);

    app.controller('ShoppingListBoughtController', ShoppingListBoughtController);

    app.service('ShoppingListService', ShoppingListService);


    ShoppingListCheckOffController.$inject = ['ShoppingListService'];

    function ShoppingListCheckOffController(ShoppingListService) {

        var checkOffList = this;

        checkOffList.toBuyList = ShoppingListService.getItems();

        checkOffList.removeItem = function (index) {

            console.log(index);
            ShoppingListService.removeItem(index);

        };

        // checkOffList.displayItems = function () {
        //
        //     ShoppingListCheckOff.getItems();
        //
        // };
    }

    ShoppingListBoughtController.$inject = ['ShoppingListService'];

    function ShoppingListBoughtController(ShoppingListService) {

        var bought = this;

        bought.boughtItems = ShoppingListService.getBoughtItems();

        console.log("bought items controller", bought.boughtItems);



    }

    app.service('ShoppingListService', ShoppingListService);

    function ShoppingListService() {

        var service = this;

        // var items = [];
        var items = toBuyList;

        var boughtItems = [];

        var temp = "";

        service.removeItem = function (index) {

            temp = items.splice(index, 1);

            // boughtItems.push(temp);
            boughtItems.push(temp.pop());

            console.log("bought items", boughtItems);

            console.log("temp items", temp);

        };

        service.getItems = function () {

            return items;
        };

        service.getBoughtItems = function () {

            return boughtItems;
        };

    }

}) ();
