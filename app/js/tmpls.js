define([
		'jquery',
		'templates',
		'underscore',
		'moment',
		'utils/url'
	],
	function ($, templates, _, moment, url) {
		Object.keys(templates)
			.forEach(function (key) {
				var fn = templates[key];

				templates[key] = function (locals) {
					return fn($.extend({
						moment: moment,
						_: _,
						url: url
					}, locals));
				};
			});


		return templates;
	});