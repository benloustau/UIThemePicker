var myModule = angular.module('Lesson03', []);

myModule.controller('MyController', function(){
	var self = this;

	self.colors = [{

		name:"Red",
		backgroundcolor: "red",
		folders: "green",
		loremColor: "blue",

	 }, {

		name:"Green",
		backgroundcolor: "green",
		folders: "red",
		loremColor: "blue",

	}, {

		name:"Blue",
		backgroundcolor: "blue",
		folders: "green",
		loremColor: "red",

	 }, {

		name:"None",
		backgroundcolor: "white",
		folders: "white",
		loremColor: "white",
 }];

 	self.folders = [{
		"name": "folder1",
		"items": ["item1","item2","item3"]
	},{
		"name": "folder2",
		"items": ["item1","item2","item3"]
	},{
		"name": "folder3",
		"items": ["item1","item2","item3"]
	}];

});
