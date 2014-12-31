Package.describe({
  name: 'micah:justified-gallery',
  summary: 'JQuery plugin that allows you to create a gallery with a justified grid. Fill all the spaces!',
  version: '0.0.1',
  git: 'https://github.com/micahalcorn/meteor-justified-gallery.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0')
  api.use(['jquery', 'less']);
  api.addFiles(['justifiedGallery.js', 'justifiedGallery.less'], 'client');
});

