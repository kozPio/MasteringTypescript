"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        arr = this.collection;
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[i]) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        console.log(arr);
    };
    return Sorter;
}());
var arr = [12, 18, 5, 10, 7, 2, -1];
var sorter = new Sorter(arr);
sorter.sort();
