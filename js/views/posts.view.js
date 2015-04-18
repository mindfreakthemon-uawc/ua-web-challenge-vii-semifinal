"use strict";

define(["views/base.view", "tmpls"], function (BaseView, tmpls) {
	return BaseView.extend({
		template: tmpls.posts,

		initialize: function () {
			this.constructor.__super__.initialize.call(this);

			this.listenTo(this.collection, "change reset", this.render);
		},

		events: {
			"click .next": "next",
			"click .prev": "prev"
		},

		next: function (e) {
			e.stopPropagation();
			e.preventDefault();

			if (this.collection.hasNextPage()) {
				this.collection.getNextPage({ fetch: true });
			}
		},

		prev: function (e) {
			e.stopPropagation();
			e.preventDefault();

			if (this.collection.hasPreviousPage()) {
				this.collection.getPreviousPage({ fetch: true });
			}
		},

		render: function () {
			this.$el.html(this.template({
				models: this.collection.toJSON(),
				collection: this.collection
			}));

			return this;
		}
	});
});
//# sourceMappingURL=../views/posts.view.js.map