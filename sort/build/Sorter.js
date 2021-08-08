"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var tempArr = [];
        if (typeof this.collection === 'string') {
            for (var i = 0; i < this.collection.length; i++) {
                tempArr.push(this.collection[i].toLowerCase());
            }
        }
        else if (this.collection instanceof Array) {
            tempArr = this.collection;
        }
        for (var i = 0; i < tempArr.length; i++) {
            for (var j = i + 1; j < tempArr.length; j++) {
                if (tempArr[j] < tempArr[i]) {
                    var leftHand = tempArr[i];
                    tempArr[i] = tempArr[j];
                    tempArr[j] = leftHand;
                }
            }
        }
        console.log(tempArr);
    };
    return Sorter;
}());
exports.Sorter = Sorter;
