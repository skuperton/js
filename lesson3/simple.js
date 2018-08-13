let money = prompt('Ваш бюджет ?');
let name = prompt('Название вашего магазина');
let price = prompt('Введите цену');

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: true
}


for (let i = 0; i < 3; i++ ) {
	 let a = prompt('Какой товар будем продавать ?');

	 if (typeof(a) === 'string' && typeof(a) != null && a.length < 50 ){
	 	console.log('Значения принято');
	  mainList.shopGoods[i] = a;

  }else if(typeof(a) == null){
  	console.log(typeof(a) + 'Значение не принято');
  }
}

function discountPrice(x){
  if (mainList.discount == true){
    let b = x - (x * 0.2);
    console.log(b);
  }
}

function employ(){
  for (i = 1; i < 5; i++){
    let person = prompt('Имя сотрудника');
    mainList.employers[i] = person;
  }
}

function dayBudget(x){
  console.log(x/30);
}

dayBudget(money);

discountPrice(price);

employ();

console.log(mainList);