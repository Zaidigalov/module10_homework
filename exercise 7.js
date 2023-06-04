//ЗАДАНИЕ 7
let arr = [1, 2, 3, 4, 5, 6];
let even = 0;
let odd = 0;
arr.forEach(function (item, index, array) {
  if (item % 2 === 0) {
    even++;
  } else {
    odd++;
  }
});
console.log(even);
console.log(odd);
