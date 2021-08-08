"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var arr = 'kaxwi';
var arr2 = [9, 4, 10, 20, 1];
var numbersCollection = new NumbersCollection_1.NumbersCollection([9, 4, 10, 20, 1, -5]);
numbersCollection.sort();
var sorter = new Sorter_1.Sorter(arr);
var sorter2 = new Sorter_1.Sorter(arr2);
console.log(numbersCollection.data);
var word = new CharactersCollection_1.CharactersCollection('helloa');
word.sort();
console.log(word.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(590);
linkedList.add(10);
linkedList.add(49);
linkedList.add(73);
linkedList.add(-5);
linkedList.sort();
linkedList.print();