"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var product_1 = require("../models/product");
var product1 = new product_1.Product();
var product2 = new product_1.Product();
var product3 = new product_1.Product();
var product4 = new product_1.Product();
product1 = {
    id: 1,
    name: "laptop",
    price: 500
};
product2 = {
    id: 2,
    name: "monitor",
    price: 200
};
product3 = {
    id: 3,
    name: "PC",
    price: 800
};
product4 = {
    id: 4,
    name: "micro",
    price: 20
};
var obsProducts = (0, rxjs_1.from)([product1, product2, product3, product4]);
obsProducts.subscribe(function (x) { return console.log("P:" + x.name); });
obsProducts
    .pipe((0, rxjs_1.filter)(function (product) { return product.price > 300; }))
    .subscribe(function (x) { return console.log("F:" + x.name); });
