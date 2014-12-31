Tinytest.add('Justified Gallery - jqueryLoaded', function (test) {
	test.isFalse(typeof jQuery == 'undefined', 'jQuery is not loaded.');
});

Tinytest.add('Justified Gallery - pluginLoaded', function (test) {
	var el = document.createElement('div');

	el.style.display = 'block';
	document.body.appendChild(el);

	var val = $(el).justifiedGallery;

	document.body.removeChild(el);

	test.isTrue(typeof val === 'function', 'Justified Gallery plugin is not loaded.'); 
});

//Test API:
//test.isFalse(v, msg)
//test.isTrue(v, msg)
//test.equalactual, expected, message, not
//test.length(obj, len)
//test.include(s, v)
//test.isNaN(v, msg)
//test.isUndefined(v, msg)
//test.isNotNull
//test.isNull
//test.throws(func)
//test.instanceOf(obj, klass)
//test.notEqual(actual, expected, message)
//test.runId()
//test.exception(exception)
//test.expect_fail()
//test.ok(doc)
//test.fail(doc)
//test.equal(a, b, msg)
