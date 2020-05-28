/* eslint-disable no-undef */
var _ = require("lodash");
// var pets = [
//    { name: "katogo", age: 6, color: "red" },
//    { name: "fluffy", age: 6, color: "grey" },
//    { name: "indigo", age: 6, color: "brown" },
// ];

// where function
// var matches = _.where(pets, { age: 6, color: "brown" });
// console.log(matches);

// var output = _.upperFirst("fred");
// console.log(output);

// // merge function with lodash
var user = { name: "Katogo", last: "KaMuwogo", age: 25, eyeColor: "brown" };
var updated = { name: "Katogo", last: "KaMuwogo", age: 28, eyeColor: "hazel" };

var updatedUser = _.merge(user, updated);
console.log("result", updatedUser);

// // nested array
// var arr = [1, 2, 3, [1, 2, [4, 5, [5, 6]], 7, 8], 9];
// var sum = _.chain(arr) //creates a lodash object wrapper
//    .flatteDeep() //recursively flattens an array
//    .map((n) => n * n) //squares each element
//    .sum() //sums up the elements
//    .value(); //required to unwrapp the lodash element

// console.log("result", sum);
