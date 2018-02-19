// var i = 1;
// for (i =1;i<100;i++){
// 	if (i%3==0 && i%2!==0){
// 		console.log(i);
// 	}
// }

// var a = Number(prompt("input first number"));
// var i = 1;
// var sum = 1;
// for (i = 1;i <= a; i ++){
// 	sum = sum*i;
// }
// console.log(sum);
var a = Number(prompt('Видите суму 10до30?'));
var late = 10;
var freplate = 20;
var milcShake = 30;

if (a >=10 ) {
	var boss = prompt("Что желаите? (1-Late) (2-Freplate) (3-milcSheke");
}
switch (boss){
	case "1":
	var cesh = a - late;
	alert("ваш заказ готовиться! " + "ваша здача : " + cesh);
	break;
	case "2":
	var cesh = a - freplate;
	alert("ваш заказ готовиться! " + "ваша здача : " + cesh);
	break;
	case "3":
	var cesh = a - milcShake;
	alert("ваш заказ готовиться! " + "ваша здача : " + cesh);
	break;
}
if (a >=10 ) {
	var boss = prompt("Желаите ли вы конфету? (1-Mars) (2-Snikers) (3-Baunti");
}
switch (boss){
	case "1":
	var cesh = a - Mars;
	alert("ваш заказ готовиться! " + "ваша здача : " + cesh);
	break;
	case "2":
	var cesh = a - Snikers;
	alert("ваш заказ готовиться! " + "ваша здача : " + cesh);
	break;
	case "3":
	var cesh = a - Baunti;
	alert("ваш заказ готовиться! " + "ваша здача : " + cesh);
	break;
}


// else if ( a > b){
// 	document.write('1');
// }
// else if (a < c){
// 	document.write('-1');
// }else{
// 	document.write(false)
// }