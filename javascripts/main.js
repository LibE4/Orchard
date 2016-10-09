/*global $*/
// use the line above if "$" is not in Gruntfile predef part
"use strict";
const outputDiv = $("#output");

function Plant(){
	this.height = 0;
}
function Tree(){
	this.branches = 0;
}
Tree.prototype =  new Plant();

Plant.prototype.increaseHeight = function (growth){
	this.height += growth;
	this.branches = 0;
	for (let i = 0; i < this.height - 10; i += 10){
		this.branches++;
	}
};

Plant.prototype.decreaseHeight = function (trimAmount){
	this.height -= trimAmount;
};

Tree.prototype.grow = function (amount){
	this.increaseHeight(amount);
};

Tree.prototype.trim = function (amount){
	this.decreaseHeight(amount);
	this.branches--;
};

function growTree(){
	pearTree.grow(7);
	oakTree.grow(9);
	if (counter % 10 === 0){
		pearTree.trim(3);
		oakTree.trim(5);
	}
	$(outputDiv).append(`<div>Pear Tree is now ${pearTree.height} cm height and has ${pearTree.branches} branches.`);
	$(outputDiv).append(`<div>Oak Tree is now ${oakTree.height} cm height and has ${oakTree.branches} branches.`);
	counter++;
}

var pearTree =  new Tree();
var oakTree =  new Tree();
var counter = 1;
var interval = null;
interval = setInterval(function(){
	if (counter > 29){
		clearInterval(interval);
	}
	growTree();
}, 1000);

