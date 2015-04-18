"use strict";

define(["backbone", "tmpls"], function (Backbone, tmpls) {
	return Backbone.View.extend({
		initialize: function () {
			this.listenTo(this.collection, "request", this.renderLoading);
			this.listenTo(this.collection, "error", this.renderError);
		},

		renderLoading: function () {
			this.$el.html(tmpls.loading());

			return this;
		},

		renderError: function () {
			this.$el.html(tmpls.error());

			return this;
		}
	});
});
//# sourceMappingURL=../views/base.view.js.map