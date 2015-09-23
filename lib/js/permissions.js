EditableText.userCanEdit = function(doc,Collection) {
  if (this.collection === 'users') {
    return this.context._id === Meteor.userId();
  }
};
