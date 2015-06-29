Template.Header.events({
  'click #toggle-right': function () {
    $('#sidebar-right').toggleClass('sidebar-right-open');
    $("#toggle-right .fa").toggleClass("fa-indent fa-dedent");
  },
  'tap #toggle-left': function () {
    App.UI.menu.toggle();
  },
  'click #toggle-profile': function () {
    $('.sidebar-profile').slideToggle();
  }
});
