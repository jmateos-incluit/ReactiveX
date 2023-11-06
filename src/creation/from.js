"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("../models/product");
var rxjs_1 = require("rxjs");
var product1 = new product_1.Product();
var product2 = new product_1.Product();
product1.id = 1;
product1.name = "Laptop";
product1.price = 500;
product2.id = 2;
product2.name = "Monitor";
product2.price = 200;
var obs = (0, rxjs_1.from)([product1, product2]);
obs.subscribe(function (product) {
    console.log("Recibimos producto:");
    console.log(product);
});
