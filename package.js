Package.describe({
  name: 'kevinpeter:connected',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.mainModule('connected.js');

   api.addFiles('client/connected.js', 'client');
   api.addFiles('client/connected.html', 'client');
   api.addFiles('client/connected.css', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('kevinpeter:connected');
  api.mainModule('connected-tests.js');
});
