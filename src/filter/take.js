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
console.log("Pipe Filter & Take");
obsProducts
    .pipe((0, rxjs_1.filter)(function (p) { return p.price > 500; }))
    .pipe((0, rxjs_1.take)(1))
    .subscribe(function (x) {
    console.log(x);
});
console.log("Pipe Take & Filter");
obsProducts
    .pipe((0, rxjs_1.take)(1))
    .pipe((0, rxjs_1.filter)(function (p) { return p.price > 500; }))
    .subscribe(function (x) {
    console.log(x);
});
console.log("Pipe Filter");
obsProducts
    .pipe((0, rxjs_1.filter)(function (p) { return p.price > 500; }))
    .subscribe(function (x) {
    console.log(x);
});
