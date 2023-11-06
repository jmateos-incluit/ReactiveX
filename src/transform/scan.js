"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("../models/product");
var rxjs_1 = require("rxjs");
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
var products = [product1, product2, product3, product4];
var obsProducts = (0, rxjs_1.from)(products);
obsProducts
    .pipe((0, rxjs_1.filter)(function (p) { return p.price > 300; }))
    .pipe((0, rxjs_1.map)(function (product) { product.price = product.price * 1.2; return product; }))
    .pipe((0, rxjs_1.scan)(function (acc, product) { return acc + product.price; }, 0))
    .subscribe(function (x) { return console.log(x); });
