define([
		'backbone',
		'tmpls'
	],
	function (Backbone, tmpls) {
		return Backbone.View.extend({
			initialize: function () {
				this.listenTo(this.collection, 'request', this.renderLoading);
			},

			renderLoading: function () {
				this.$el.html(tmpls.loading());

				return this;
			}
		});
	});