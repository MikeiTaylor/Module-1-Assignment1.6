// JavaScript source code

var life= 100; //This is my life bar, Global
life=life - 10;
life=life / 10;

var checkout= false; //BOOLEAN, Global
var box = null; // Global

function logger() {
	const name="Michael"; //This is a block scope
	console.log("How will we use console log in a webpage?");
	console.log("Will our webpage work on mobile devices?");
	console.log("What is this function minly used for?");
}

console.log(name);

{let value=200;} //Block

function adder(num1,num2){
	console.log(num1 + num2);
}
adder(7, 6); 

const toUpper = () => {
	"Michael Taylor's Assignment"
}