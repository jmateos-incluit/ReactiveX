"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var obs = (0, rxjs_1.interval)(1000);
obs.subscribe(function (x) {
    console.log(x);
});
