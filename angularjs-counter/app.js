// angular.module('counter', []);
// First parameter is the "name" of the module
// Second is the list of dependencies. Omitting it "gets" the module rather than sets it 

angular
	.module('counter',[])
	.controller('CounterController', CounterController); //CounterController is name of the controller

function CounterController() {
	this.number = 0;
	this.increment = () => {this.number++};
	this.decrement = () => {this.number--};
}