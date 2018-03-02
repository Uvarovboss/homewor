// var a = Number(prompt("Введите радиус:"));
// var i = 3.14;
// var b;
// b=2*i*a;
// var s = i*a*a;

// document.write("Длина круга = " + b + "<br>" + "Площадь = " + s);

// var i = 1;
// for (i =1;i<100;i++){
// 	if (i%3==0 && i%2!==0){
// 		console.log(i);
// 	}
// }

// var a = Number(prompt('Видите суму 10до30?'));
// var late = 10;
// var freplate = 20;
// var milcShake = 30;

// var sss = Number(prompt('Видите больше денег'));
// while(a<10){
// 	alert('пожалуйста больше денег');
// 	var add = Number(prompt('Видите больше денег '));
// 	sss += add;
// 	console.log(wsdsd);
// }
// var exit = false;
// var change = 0;
// while(exit != true){
// 	var drink =prompt("cok water");
// 	if (drink === "water" && sss >=10){
// 	change = sss - water;
// 	sss = change;
// 	alert("ваша сдача: " + change);
// 	}
// 	if (sss <10) {
// 		exit = confirm("Не достаточно денег.нажми ок чтоб выйти ");
// 	}
// }

// var word = prompt("твое слово");
// for (var i = 0; i<word.length;i++){
// var codepoint = string.charCodeAt(word[i]);
// }


// var a = Number(prompt("input first number"));
// var i = 1;
// var sum = 1;
// for (i = 1;i <= a; i ++){
// 	sum = sum*i;
// }
// console.log(sum);
// var a = Number(prompt('Введите суму 10до30?'));
// var late = 10;
// var freplate = 20;
// var milcShake = 30;

// if (boss <10 ) {
// 	// alert("больше денег")
// 	var add = Number(prompt('Вв едите больше'));
// }
// var boss = prompt("Что желаите? (1-Late) (2-Freplate) (3-milcSheke");
// switch (boss){
// 	case "1":
// 	var cesh = a - late;
// 	alert("ваш заказ готовиться! " + "ваша здача : " + cesh);
// 	break;
// 	case "2":
// 	var cesh = a - freplate;
// 	alert("ваш заказ готовиться! " + "ваша здача : " + cesh);
// 	break;
// 	case "3":
// 	var cesh = a - milcShake;
// 	alert("ваш заказ готовиться! " + "ваша здача : " + cesh);
// 	break;
// }



// else if ( a > b){
// 	document.write('1');
// }
// else if (a < c){
// 	document.write('-1');
// }else{
// 	document.write(false)
// }
	
	//Кодировка слов)

// var word = prompt("input your word");
// var code = " ";
// var back = Number(prompt("Твое чесло"));
// for (var i = 0; i < word.length; i++) {
// 	var codepoint = word [i].charCodeAt();
// 	codepoint -=back;
// 	code += String.fromCharCode(codepoint);
// }	
// 	alert(code); 

//квадратное уравнения 
  
// var a;
// var b;
// var c;
// var D;
// var x1;
// var x2;
// function getCof() {
// 	a = Number(prompt("input a"));
// 	b = Number(prompt("input b"));
// 	c = Number(prompt("input c"));
// }
// function calcDisc(a,b,c){
// 	var Di = b*b-a*c;
// 	if (Di<0) {
// 		alert("heva not roots")
// 	}
// 	if (Di>0) {
// 		x1 = (b*-1 + Math.sqrt(Di)) / (2 * a);
// 		x1 = (b*-1 - Math.sqrt(Di)) / (2 * a);
// 		alert(x1 + "" + x2);
// 	}
// 	if (Di==0) {
// 		D= -b / (2*a);
// 		alert(D);
// 	}
// }
// getCof();
// calcDisc(a, b, c,);

//Числа Фибоначи

function Fff(){
	var n = Number(prompt("input nomber"));
	var a =1;
	var b=1;
	var s;
	for (var i =3;i<=n; i++){
		s = a + b;
		a = b;
		b = s;
	}
	alert(b)
}
Fff();

