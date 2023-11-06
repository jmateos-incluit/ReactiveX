"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var erroSource = (0, rxjs_1.throwError)(function () {
    var error = new Error("Creamos nuestro error");
    error.timestamp = Date.now();
    return error;
});
var errorExample = erroSource.pipe((0, rxjs_1.catchError)(function (error) { return (0, rxjs_1.of)("Error: ".concat(error)); }));
errorExample.subscribe(function (x) { return console.log(x); });
