Meteor.startup(function() {
  $(document).on('click', 'button', function() {
      var animate = $(this).attr("data-animated");
      $(this).closest('.panel').addClass(animate).delay(1000).queue(function(next) {
        $(this).removeClass(animate);
        next();
      });
  });
});
