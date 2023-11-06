"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var obs = (0, rxjs_1.range)(1, 10);
obs.subscribe(function (x) {
    console.log(x);
});
obs.subscribe(function (x) {
    console.log("sus 2: " + x);
});
