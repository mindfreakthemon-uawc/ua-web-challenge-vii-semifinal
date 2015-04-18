define([
		'views/base.view',
		'tmpls'
	],
	function (BaseView, tmpls) {
		return BaseView.extend({
			template: tmpls.comments,

			initialize: function () {
				this.constructor.__super__.initialize.call(this);

				this.listenTo(this.collection, 'change reset', this.render);
			},

			render: function () {
				this.$el
					.html(this.template({
						models: this.collection.toJSON(),
						collection: this.collection,
						post: this.collection.post.toJSON()
					}));

				return this;
			}
		});
	});