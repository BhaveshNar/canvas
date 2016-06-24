var box1= document.getElementById('box1');
var box2= document.getElementById('box2');
var box3= document.getElementById('box3');
var box4= document.getElementById('box4');
var box5= document.getElementById('box5');
var ground= document.getElementById('ground');
var sky= document.getElementById('sky');
var sun= document.getElementById('sun');
var building= document.getElementById('building');
var taaki=document.getElementById('taaki');
var color;
box1.onclick=function() {
	color='blue';
	}

box2.onclick=function() {
	color='yellow';
	}
box3.onclick=function(){
	color='skyblue';
	}
box4.onclick=function() {
	color='green';
	}
box5.onclick=function(){
	color='black';
	}
ground.onclick=function() {
	this.style.background=color;
	}

sky.onclick=function() {
	this.style.background=color;
	}
building.onclick= function() {
	this.style.background=color;
	}
sun.onclick= function() {
	this.style.background=color;
	}
taaki.onclick= function() {
	this.style.background=color;
	}
