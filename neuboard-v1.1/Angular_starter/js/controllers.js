function MainCtrl() {
	this.projectBoldName = 'App';
	this.projectName = 'Name';
    this.userName = 'Example user';
    this.headerText = 'AngularJS Starter Project';
    this.descriptionText = 'Here you can quickly bootstrap your AngularJS project.';

};


angular
    .module('neuboard')
    .controller('MainCtrl ', MainCtrl)
