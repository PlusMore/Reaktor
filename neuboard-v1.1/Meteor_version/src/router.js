Router.configure({
  layoutTemplate: 'Layout',
  loadingTemplate: 'Loading',
  notFoundTemplate: '404'
});

Router.route('/', function () {
  this.render('Dashboard', {});
},{
  name: 'Dashboard'
});

Router.route('/ui-elements/buttons', function () {
  this.render('Buttons', {});
},{
  name: 'UI.Buttons'
});

Router.route('/ui-elements/sliders-and-progress', function () {
  this.render('SlidersAndProgress', {});
},{
  name: 'UI.SlidersAndProgress'
});

Router.route('/ui-elements/modals-and-popups', function () {
  this.render('ModalsAndPopups', {});
},{
  name: 'UI.ModalsAndPopups'
});

Router.route('/ui-elements/tabs-and-accordions', function () {
  this.render('TabsAndAccordions', {});
},{
  name: 'UI.TabsAndAccordions'
});

Router.route('/ui-elements/alerts-and-notifications', function () {
  this.render('AlertsAndNotifications', {});
},{
  name: 'UI.AlertsAndNotifications'
});

Router.route('/ui-elements/nestable-lists', function () {
  this.render('NestableLists', {});
},{
  name: 'UI.NestableLists'
});

Router.route('/ui-elements/panels', function () {
  this.render('Panels', {});
},{
  name: 'UI.Panels'
});

Router.route('/ui-elements/icons', function () {
  this.render('Icons', {});
},{
  name: 'UI.Icons'
});

Router.route('/ui-elements/typography', function () {
  this.render('Typography', {});
},{
  name: 'UI.Typography'
});

Router.route('/forms/components', function () {
  this.render('FormComponents', {});
},{
  name: 'Forms.Components'
});

Router.route('/forms/validation', function () {
  this.render('FormValidation', {});
},{
  name: 'Forms.Validation'
});

Router.route('/forms/mask', function () {
  this.render('FormMask', {});
},{
  name: 'Forms.Mask'
});

Router.route('/forms/wizard', function () {
  this.render('FormWizard', {});
},{
  name: 'Forms.Wizard'
});

Router.route('/forms/file-upload', function () {
  this.render('FileUpload', {});
},{
  name: 'Forms.FileUpload'
});

Router.route('/forms/wysiwyg', function () {
  this.render('FormWysiwyg', {});
},{
  name: 'Forms.WYSIWYG'
});

Router.route('/css-animations', function () {
  this.render('CSSAnimations', {});
}, {
  name: 'CSSAnimations'
});