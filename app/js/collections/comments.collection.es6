define([
		'backbone',
		'underscore',
		'models/comment.model',
		'models/post.model',
		'utils/url'
	],
	function (Backbone, _, Comment, Post, url) {
		return Backbone.Collection.extend({
			model: Comment,

			initialize: function (models, options) {
				this.id = options.id;
				this.name = options.name;
				this.title = options.title;
			},

			url: function () {
				return 'https://www.reddit.com/r/' + this.name + '/comments/' + this.id + '/' + this.title + '.json';
			},

			parse: function (response) {
				var post = response[0].data.children[0].data;

				post.url = url.port(post.url);

				this.post = new Post(post);


				function curses(child) {
					var object = child.data;

					object.kind = child.kind;

					if (object.replies) {
						object.replies = _.map(object.replies.data.children, curses);
					}

					return object;
				}

				return _.map(response[1].data.children, curses);
			}
		});
	});