Package.describe({
  name: 'micah:justified-gallery',
  summary: 'JQuery plugin that allows you to create a gallery with a justified grid. Fill all the spaces!',
  version: '0.0.3',
  git: 'https://github.com/micahalcorn/meteor-justified-gallery.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use(['jquery', 'less@2.5.0']);
  api.addFiles(['justified-gallery.js', 'justified-gallery.less'], 'client');
});

Package.onTest(function (api) {
  api.use('micah:justified-gallery', 'client');
  api.use('tinytest@1.0.0');
  api.addFiles(['justified-gallery-tests.js'], 'client');
});
