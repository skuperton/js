let week = ['','понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

var date = new Date();

for (i = 0; i < 8; i++){
     if (i === date.getDay()){
	    document.write('<i>' + week[i] + '</i>' + '<br>');
      }else if (i === 7 || i === 6){
      	document.write('<b>' + week[i] + '</b>' + '<br>');
       }else if(i != date.getDay()){
     	document.write(week[i] + '<br>');
       }
}

let arr = ['1', '3333', '4', '3888', '6', '4'];
for (i = 0; i < arr.length; i++){
let arrstr = arr[i].toString();
	if (arrstr.charAt(0) === '3'){
document.write(arr[i] + '<br>');
console.log (arrstr);
	}

}	




/*for(i = 0; i < arr.length; i++ ){
	document.write(arr.indexOf(1) + '<br>');
}*/
/*console.log(week);
console.log(date.getDay());*/