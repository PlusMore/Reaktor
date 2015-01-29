Template.SidebarProfile.events({
  'click #profile-dropdown': function (e, tmpl) {
    e.preventDefault();
    e.stopPropagation();

    $(e.currentTarget).dropdown();
  }
});