/**
 * 1. For...in
 * 2. For...of
 * 3. forEach
 */
var scores = [1, 2, 1, 2, 3, 4];
for (var x in scores) {
  console.log(x);
}

var scores = [1, 2, 1, 2, 3, 4];
for (var x of scores) {
  console.log(x);
}

/**
 * Object
 */
var data = {
  name: "Vishnu",
  age: 28,
};
for (let y in data) {
  console.log(data[y]);
}
