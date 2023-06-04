//ЗАДАНИЕ 8
let fruits = new Map();
fruits.set("apple", "green");
fruits.set("strawberry", "red");
fruits.set("blueberry", "blue");

for (let name of fruits.keys()) {
  console.log("Ключ - " + name);
}

for (let value of fruits.values()) {
  console.log("Значение - " + value);
}
