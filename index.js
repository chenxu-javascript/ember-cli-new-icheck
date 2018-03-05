'use strict';
var path = require('path');
module.exports = {
  name: 'ember-cli-new-icheck',
  included: function(app) {
    this._super.included(app);

    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import('vendor/iCheck/icheck.min.js');
    }

    app.options = app.options || {}; // Ensures options exists for Scss/Less below
    let options = app.options['emberCliIcheck'] || {};

    let skinsPath = 'vendor/iCheck/skins/';

    let skins = options.skins || ['square'];
    let colors = options.colors || ['blue'];

    skins.forEach(skin => {
      colors.forEach(color => {
        app.import(path.join(skinsPath, skin + "/" + color + ".css"));
        app.import(path.join(skinsPath, skin + "/" + color + ".png"), { destDir: 'assets' });
        app.import(path.join(skinsPath, skin + "/" + color + "@2x.png"), { destDir: 'assets' });
      });
    });
  }
};
