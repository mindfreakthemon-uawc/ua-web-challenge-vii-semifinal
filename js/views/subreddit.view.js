"use strict";

define(["backbone", "tmpls"], function (Backbone, tmpls) {
	return Backbone.View.extend({
		template: tmpls.subreddit,

		className: "subreddit",

		initialize: function () {
			this.listenTo(this.model, "change", this.render);
		},

		render: function () {
			this.$el.html(this.template({
				model: this.model.toJSON()
			}));

			return this;
		}
	});
});
//# sourceMappingURL=../views/subreddit.view.js.map