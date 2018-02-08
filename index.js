var i = 1;
for (i =1;i<100;i++){
	if (i%3==0 && i%2!==0){
		console.log(i);
	}
}

var a = Number(prompt("input first number"));
var i = 1;
var sum = 1;
for (i = 1;i <= a; i ++){
	sum = sum*i;
}
console.log(sum);