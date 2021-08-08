"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var FinalSorter_1 = require("./FinalSorter");
var CharactersCollection = /** @class */ (function (_super) {
    __extends(CharactersCollection, _super);
    function CharactersCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (firstIteretionIndex, secondIterationIndex) {
        return this.data[firstIteretionIndex].toLowerCase() > this.data[secondIterationIndex].toLowerCase();
    };
    CharactersCollection.prototype.swap = function (firstIteretionIndex, secondIterationIndex) {
        var characters = this.data.split('');
        var temp = characters[secondIterationIndex];
        characters[secondIterationIndex] = characters[firstIteretionIndex];
        characters[firstIteretionIndex] = temp;
        this.data = characters.join('');
    };
    return CharactersCollection;
}(FinalSorter_1.FinalSorter));
exports.CharactersCollection = CharactersCollection;
