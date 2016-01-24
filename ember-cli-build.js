/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  app.import('bower_components/kendo-ui/styles/kendo.common.core.min.css');
  app.import('bower_components/kendo-ui/styles/kendo.common.min.css')
  app.import('bower_components/kendo-ui/styles/kendo.common-material.core.min.css');
  app.import('bower_components/kendo-ui/styles/kendo.common-material.min.css');
  app.import('bower_components/kendo-ui/styles/kendo.material.min.css');

  app.import('bower_components/kendo-ui/styles/Material/loading.gif', {
    distDir: 'assets'
  });
  app.import('bower_components/kendo-ui/styles/Material/sprite.png', {
    distDir: 'assets'
  });

  return app.toTree();
};
