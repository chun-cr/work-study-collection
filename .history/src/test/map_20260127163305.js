var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
 
// 将会显示两个 log。 一个是 "0 = zero" 另一个是 "1 = one"
// for (var [key, value] of myMap) {
//   console.log(key + " = " + value);
// }
for (var [key, value] of myMap.entries()) {
  console.log(key + " = " + value);
}