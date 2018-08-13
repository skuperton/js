let str = 'урок-3-был слишком лёгким';


/*1 задание*/

/*function firstLatter(){
	a = str.charAt(0);
	a.toUpperCase();
}

firstLatter()*/

/*2 задание*/

/*console.log(str.replace(/-/g, ' '));*/


/*3 задание*/
 
 function slicer (){
 	let a = str.indexOf('лёгким');
 	let b = str.slice(a);
 	let v = b.split('');
 	let h = v.splice(-2, 2, "o","o");
 

 	console.log(h);

 }

slicer();

