const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
  { name: "Mouse", price: 15 }
];

const filterdItems = items.filter(el => {
  return el.price <= 100;
});

const itemNames = items.map(el => {
  return el.name;
});

const foundItems = items.find(el => {
  return el.name === "Book";
});

items.forEach(item => {
  console.log(item.name);
});

const hasInexpensiveItems = items.some(item => {
  return item.price <= 100;
});

const hasEveryInexpensiveItems = items.every(item => {
  return item.price <= 100;
});

const total = items.reduce((runningSum, item) => {
  return item.price + runningSum;
}, 0);

console.log(items);
console.log(filterdItems);
console.log(itemNames);
console.log(foundItems);
console.log(hasInexpensiveItems);
console.log(hasEveryInexpensiveItems);
console.log(`The total is: ${total}`);
// console.log(`Found ${foundItems}`)

const numbers = [1, 2, 3, 4, 5];

// const includes2 = numbers.includes(2)
// console.log(numbers)
console.log(`Does the array ${numbers} include the number 2? The answer is:  ${numbers.includes(2)}`);
