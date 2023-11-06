"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("../models/product");
var client_1 = require("../models/client");
var rxjs_1 = require("rxjs");
var product1 = new product_1.Product();
var product2 = new product_1.Product();
var client1 = new client_1.Client();
var client2 = new client_1.Client();
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
client1 = {
    id: 1,
    name: "Joaquin"
};
client2 = {
    id: 2,
    name: "Eduardo"
};
var obs1 = (0, rxjs_1.of)(product1);
var obs2 = (0, rxjs_1.of)(product2);
var obs3 = (0, rxjs_1.of)(client1);
var obs4 = (0, rxjs_1.of)(client2);
obs1.subscribe(function (x) { return console.log(x); });
obs2.subscribe(function (x) { return console.log(x); });
obs3.subscribe(function (x) { return console.log(x); });
obs4.subscribe(function (x) { return console.log(x); });
(0, rxjs_1.merge)(obs1, obs2, obs3, obs4).subscribe(function (x) {
    console.log("merge");
    console.log(x);
});
