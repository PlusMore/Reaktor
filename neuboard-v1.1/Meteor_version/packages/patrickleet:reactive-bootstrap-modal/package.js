Package.describe({
  summary: "Reactive bootstrap modal for meteor with easy to use api > modal.show(template, data).",
  version: "0.1.4",
  git: ""
});

Package.onUse(function(api) {
  api.use('reactive-var');
  api.use('underscore');
  api.use('tracker');
  api.use('jquery');
  api.use('templating');

  api.versionsFrom('METEOR@1.0');
  api.addFiles(['Modal.js', 'modal.html', 'modal-template.js'], ['client']);
  api.export(['modal', 'Modal'], ['client']);
});