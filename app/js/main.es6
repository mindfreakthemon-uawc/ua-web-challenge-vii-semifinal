require({
	baseUrl: '/js',
	paths: {
		jquery: '../lib/jquery/dist/jquery.min',
		underscore: '../lib/underscore/underscore-min',
		backbone: '../lib/backbone/backbone',
		paginator: '../lib/backbone.paginator/lib/backbone.paginator',
		moment: '../lib/moment/min/moment.min',
		jade: '../lib/jade/runtime',
		templates: '../templates'
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