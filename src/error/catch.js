"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var errorCount = 0;
var errorWithTimestamp$ = (0, rxjs_1.throwError)(function () {
    var error = new Error("This is error number ".concat(++errorCount));
    error.timestamp = Date.now();
    return error;
});
errorWithTimestamp$.subscribe({
    error: function (err) { return console.log(err.timestamp, err.message); }
});
errorWithTimestamp$.subscribe({
    error: function (err) { return console.log(err.timestamp, err.message); }
});
