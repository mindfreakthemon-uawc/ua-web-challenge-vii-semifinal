define([
		'backbone'
	],
	function (Backbone) {
		return Backbone.Router.extend({
			execute: function (callback, args) {
				this.trigger('routing');

				if (callback) {
					callback.apply(this, args);
				}
			}
		});
	});