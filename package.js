Package.describe({
  name: 'kevinpeter:connected',
  version: '1.0.4',
  // Brief, one-line summary of the package.
  summary: 'Show connecting information, when server is not connected',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/kevinpeter/meteor_connected.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
   api.use(['ui', 'blaze', 'templating', 'session'], 'client');


   api.addFiles('client/connected.html', 'client');
   api.addFiles('client/connected.js', 'client');
   api.addFiles('client/connected.css', 'client');

   api.addFiles('connected.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('kevinpeter:connected');
  api.mainModule('connected-tests.js');
});
