let money = prompt('Ваш бюджет ?');
let name = prompt('Название вашего магазина');

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false
}


for (let i = 0; i < 3; i++ ) {
	 let a = prompt('Какой товар будем продавать ?');

	 if (typeof(a) === 'string' && typeof(a) != null && a.length < 50 ){
	 	console.log('Значения принято');
	  mainList.shopGoods[i] = a;

  }else if(typeof(a) === null){
  	console.log(typeof(a) + 'Значение не принято');
  }
}
 /*var i = 0
do {
  let a = prompt('Какой товар будем продавать ?');
  mainList.shopGoods[i] = a;
  i++;
} while(i < 5);*/

/*for (let i = 0; i < 3; i++ ) {
   let a = prompt('Какой товар будем продавать ?');

   if (typeof(a) === 'string' && typeof(a) != null && a.length < 50 ){
    console.log('Значения принято');
    mainList.shopGoods[i] = a;

  }else if(typeof(a) != 'string'){
    console.log(typeof(a) + 'Значение не принято');
  }
}*/



alert('Ваш бюджет в день' + mainList.budget / 30 + 'рублей');

console.log(mainList);