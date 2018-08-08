var myList = new Object();

myList.budget = prompt("Какой ваш бюджет?");
myList.storeName = prompt('Какое название магазина?');
myList.shopGoods = [];
myList.shopGoods.push(prompt('Какой товар 1 ?'));
myList.shopGoods.push(prompt('Какой товар 2 ?'));
myList.shopGoods.push(prompt('Какой товар 3 ?'));
myList.employers = new Object();
myList.open = true;

alert('Ваш бюджет в день' + myList.budget/30 + 'рублей');

console.log(myList.open);