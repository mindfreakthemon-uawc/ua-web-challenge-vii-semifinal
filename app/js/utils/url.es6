define([
		'underscore'
	],
	function () {
		const SUBREDDIT_PREFIX = /^(?:https?:\/\/www\.reddit\.com)?\/r\//i;
		const RELATIVE_HREF = /="\//;
		const REDDIT_URL = 'https://www.reddit.com/';

		return {
			port: function (url) {
				if (SUBREDDIT_PREFIX.test(url)) {
					return url.replace(SUBREDDIT_PREFIX, '?/');
				}

				return url;
			},

			host: function (text) {
				return text.replace(RELATIVE_HREF, function () {
					return '="' + REDDIT_URL;
				});
			},

			unraw: function (text) {
				return _.unescape(this.host(text));
			}
		}
	});