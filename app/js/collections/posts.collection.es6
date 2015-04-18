define([
		'underscore',
		'paginator',
		'models/post.model',
		'utils/url'
	],
	function (_, Paginator, Post, url) {

		return Paginator.extend({
			model: Post,

			mode: 'infinite',

			queryParams: {
				pageSize: null,
				currentPage: null,
				totalPages: null,
				totalRecords: null,
				sortKey: null,
				order: null,
				count: function () {
					var isBefore = this.state.anchorType === 'before',
						padding = isBefore ? 1 : 0;

					return this.state.pageSize * (padding + this.state.currentPage) + padding;
				},
				after: function () {
					if (this.state.anchorType === 'after') {
						return this.state.anchor;
					}

					return null;
				},
				before: function () {
					if (this.state.anchorType === 'before') {
						return this.state.anchor;
					}

					return null;
				}
			},

			state: {
				firstPage: 0,
				currentPage: 0
			},

			parseLinks: function (response) {
				var after = response.data.after,
					before = response.data.before;

				if (!this.links[this.state.currentPage]) {
					this.links[this.state.currentPage] = this.url.bind(this, { anchorType: this.state.anchorType, anchor: this.state.anchor });
				}

				return {
					first: null,
					next: after ? this.url.bind(this, { anchorType: 'after', anchor: after }) : null,
					prev: before ? this.url.bind(this, { anchorType: 'before', anchor: before }) : null
				};
			},

			parseRecords: function (response) {
				return _.map(response.data.children, function (child) {
					var object = child.data;

					object.url = url.port(object.url);

					return object;
				});
			},

			initialize: function (models, options) {
				this.type = options.type;
				this.name = options.name;

				this.state.anchorType = options.anchorType;
				this.state.anchor = options.anchor;
				this.state.currentPage = options.page;
			},

			url: function (data) {
				if (data) {
					this.state.anchorType = data.anchorType;
					this.state.anchor = data.anchor;
				}

				return 'https://www.reddit.com/r/' + this.name + '/' + this.type + '.json';
			}
		});
	});