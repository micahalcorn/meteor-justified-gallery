meteor-justified-gallery
========================

This Meteor package allows you to include the incredible [Justified Gallery plugin by @miromannino](https://github.com/miromannino/Justified-Gallery) for client-side use.

Requires: `jquery` package

Includes: <a href="https://brutaldesign.github.io/swipebox/">jQuery Swipebox plugin</a> (but not currently Colorbox)

## Installation

```bash
$ meteor add micah:justified-gallery
```

## Usage

***See an example application using this package [here](http://github.com/micahalcorn/meteor-justified-gallery-example).***

Check out the [examples](http://miromannino.github.io/Justified-Gallery/getting-started/) and [documentation](http://miromannino.github.io/Justified-Gallery/options-and-events/) for the jQuery plugin.

One note is that your images must each be nested in an anchor tag within the containing div.

```html
<div id="gallery">
  {{#each images}}
    <a><img src="{{url}}" /></a>
  {{/each}}
</div>
```

```js
$('#gallery').justifiedGallery({
  // option: default,
  rowHeight: 120,
  maxRowHeight: 0,
  lastRow: 'nojustify',
  fixedHeight: false,
  captions: true,
  margins: 1,
  randomize: false,
  extension: /.[^.]+$/,
  refreshTime: 250,
  waitThumbnailsLoad: true,
  justifyThreshold: 0.35,
  cssAnimation: false,
  imagesAnimationDuration: 300
}).on('jg.complete', function (e) {
  // this callback runs after the gallery layout is created
}).on('jg.resize', function (e) {
  // this callback runs after the gallery is resized
}).on('jq.rowflush', function (e) {
  // this callback runs when a new row is ready
});
```

## Contributing

This is my first Meteor package, so please feel free to jump in and offer direction or pull requests.
