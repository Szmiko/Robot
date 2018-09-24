function Robot(name, year, owner) {
	this.name = name;
	this.year = year;
	this.owner = owner;
};

Robot.prototype.maker = "Apple";

Robot.prototype.speak = function() {
	alert("Hello");
};

Robot.prototype.makeCoffee = function() {
	alert("Państwa kawa.");
};

Robot.prototype.blinkLights = function() {
	alert("Zapalam światło.");
};

var robby = new Robot("Robby", 2012, "Jobs");
var rosie = new Robot("Rosie", 2006, "Kalashnikov");

robby.onOffSwitch = true;
robby.makeCoffee = function() {
	alert("Kawa ze Starbucksa.");
};

rosie.cleanHouse = function() {
	alert("Sprzątam!");
};

console.log("Robot " + robby.name + " został wyprodukowany przez " + robby.maker + " w roku " + robby.year + ", a teraz jego właścicilem jest " + robby.owner);
robby.makeCoffee();
robby.blinkLights();

console.log("Robot " + rosie.name + " został wyprodukowany przez " + rosie.maker + " w roku " + rosie.year + ", a teraz jego właścicilem jest " + rosie.owner);
rosie.cleanHouse();