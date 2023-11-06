"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var obs = rxjs_1.Observable.create(function (observer) {
    observer.next("Hola");
    observer.next("Mundo");
    observer.complete();
});
obs.subscribe(function (value) {
    console.log("suscriber 1");
    console.log(value);
});
obs.subscribe(function (value) {
    console.log("suscriber 2");
    console.log(value);
});
