"use strict";
exports.__esModule = true;
exports.another = void 0;
var hash = {
    "one": 1,
    "two": 2,
    "three": 3
};
for (var _i = 0, _a = Object.entries(hash); _i < _a.length; _i++) {
    var _b = _a[_i], key = _b[0], value = _b[1];
    console.log(key, value);
}

console.log(hash["three"]);
console.log(Object.entries(hash));
var another = /** @class */ (function () {
    function another() {
        this.a = 100;
        this.b = 100;
        console.log(this.a, this.b);
    }
    return another;
}());
exports.another = another;
