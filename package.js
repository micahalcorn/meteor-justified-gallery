Package.describe({
  name: 'micah:justified-gallery',
  summary: 'JQuery plugin that allows you to create a gallery with a justified grid. Fill all the spaces!',
  version: '0.0.4',
  git: 'https://github.com/micahalcorn/meteor-justified-gallery.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use(['jquery']);
  api.addAssets([
    'vendor/swipebox/img/icons.png',
    'vendor/swipebox/img/index.svg',
    'vendor/swipebox/img/loader.gif'
  ], 'client');
  api.addFiles([
    'vendor/justified-gallery/js/jquery.justifiedGallery.js',
    'vendor/justified-gallery/css/justifiedGallery.css',
    'vendor/swipebox/js/jquery.swipebox.js',
    'vendor/swipebox/css/swipebox.css'
  ], 'client');
});

Package.onTest(function (api) {
  api.use('micah:justified-gallery', 'client');
  api.use('tinytest@1.0.0');
  api.addFiles(['justified-gallery-tests.js'], 'client');
});
