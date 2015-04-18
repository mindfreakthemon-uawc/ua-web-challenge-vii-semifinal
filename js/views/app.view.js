"use strict";

define(["backbone", "entities/router", "models/subreddit.model", "models/post.model", "collections/posts.collection", "collections/comments.collection", "views/subreddit.view", "views/posts.view", "views/comments.view"], function (Backbone, router, Subreddit, Post, PostsCollection, CommentsCollection, SubredditView, PostsView, CommentsView) {
	return Backbone.View.extend({
		el: "#viewport",

		events: {
			"click .fn-click": "redirect",
			"click a": "redirect"
		},

		initialize: function () {
			this.router = router;

			router.route("?/:subreddit(/:type)(/:page/:anchor_type/:anchor)(/)", "reddit", this.reddit.bind(this));
			router.route("?/:subreddit/comments/:id/:name(/)", "post", this.post.bind(this));

			this.listenTo(router, "routing", function () {
				this.$el.empty();
			});
		},

		reddit: function (name, type, page, anchorType, anchor) {
			type || (type = "hot");
			page = page | 0;

			this.subreddit(name, type).$el.appendTo(this.$el);

			var posts = new PostsCollection(null, {
				name: name,
				type: type,
				page: page,
				anchorType: anchorType,
				anchor: anchor
			});

			this.listenTo(posts, "reset", function () {
				var page = posts.state.currentPage,
				    pagePath = page ? "/" + posts.state.currentPage + "/" + posts.state.anchorType + "/" + posts.state.anchor : "";

				this.router.navigate("?/" + name + "/" + type + pagePath);
			});

			var postsView = new PostsView({
				collection: posts
			});

			postsView.$el.appendTo(this.$el);

			if (type === "hot" && page === 0) {
				// load first 25 comment pages
				this.listenToOnce(posts, "reset", function () {
					posts.models.forEach(function (post) {
						fetch("https://www.reddit.com" + post.get("permalink").replace(/\/$/, "") + ".json");
					});
				});
			}

			posts.fetch({ reset: true });
		},

		post: function (name, id, title) {
			this.subreddit(name, "comment").$el.appendTo(this.$el);

			var comments = new CommentsCollection(null, {
				title: title,
				name: name,
				id: id
			});

			var commentsView = new CommentsView({
				collection: comments
			});

			commentsView.$el.appendTo(this.$el);
			comments.fetch({ reset: true });
		},

		subreddit: function (name, type) {
			var subreddit = new Subreddit({
				name: name,
				type: type
			});

			var subredditView = new SubredditView({
				model: subreddit
			});

			return subredditView.render();
		},

		redirect: function (e) {
			if (e.target.pathname !== location.pathname || e.target.hostname !== location.hostname) {
				return;
			}

			e.preventDefault();
			e.stopPropagation();

			var fragment = e.target.search;

			if (Backbone.history.fragment === fragment) {
				return "";
			}

			router.navigate(e.target.search, { trigger: true });
		}
	});
});
//# sourceMappingURL=../views/app.view.js.map