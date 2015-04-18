require({
	baseUrl: '/js',
	paths: {
		jquery: '../lib/jquery/dist/jquery.min',
		underscore: '../lib/underscore/underscore-min',
		backbone: '../lib/backbone/backbone',
		paginator: '../lib/backbone.paginator/lib/backbone.paginator',
		moment: '../lib/moment/min/moment.min',
		'moment-duration-format': '../lib/moment-duration-format/lib/moment-duration-format',
		jade: '../lib/jade/runtime',
		templates: '../templates'
	},
	shim: {
		'moment-duration-format': {
			deps: ['moment']
		}
	}
}, [
	'backbone',
	'entities/app'
], function (Backbone) {
	Backbone.history.start({
		pushState: true,
		root: location.pathname
	});
});