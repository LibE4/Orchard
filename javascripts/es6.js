"use strict";
console.log("es6");

// const
const a = 8;
console.log("a", a);
// a = 12;
// console.log("a", a);
// const outputDiv = $('output');

//let
let b = 8;
console.log("b", b);
b = 12;
console.log("b", b);
function varTest(){
	var x = 1;
	if(true){
		x = 2;
		console.log("inside x", x);
	}
	console.log("outside x", x);
}
varTest();

function letTest(){
	let x = 1;
	if(true){
		let x = 2;
		console.log("inside x", x);
	}
	console.log("outside x", x);
}
letTest();

// arrow functions
var sum = function(){
	let a = 1, b = 2;
	return a + b;
};

var sum2 =()=>{
	let a = 1, b = 2;
	return a + b;	
};

var reflect = function(value){
	return value;
};

var reflect2 = (value)=>value;

var realSum = function(num1, num2){
	return num1 + num2;
};

var realSum2 = (num1, num2)=>(num1 + num2);
console.log("realSum2", realSum2(5, 4));

//string templates
let m = "biteme";
console.log("m", m);
let r = `hello my name is ${m}`;
console.log("r", r);

//object literal property shorthand
let wow = "HI there", es6 = "ES6", numNum = ()=>{console.log("aafasf");};
let myOldObject = {
	wow: wow,
	es6: es6,
	numNum: numNum
};

let myNewObject = {
	wow, es6, numNum
};

//method properties
var e5Obj = {
	foo: function(){console.log("foo");},
	bar: function(){console.log("bar");}
};
console.log("e5Obj", e5Obj);

var e6Obj = {
	foo(){console.log("foo");},
	bar(){console.log("bar");}
};
console.log("e6Obj", e6Obj);





