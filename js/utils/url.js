"use strict";

define(["underscore"], function () {
	var SUBREDDIT_PREFIX = /^(?:https?:\/\/www\.reddit\.com)?\/r\//i;
	var RELATIVE_HREF = /="\//;
	var REDDIT_URL = "https://www.reddit.com/";

	return {
		port: function (url) {
			if (SUBREDDIT_PREFIX.test(url)) {
				return url.replace(SUBREDDIT_PREFIX, "?/");
			}

			return url;
		},

		host: function (text) {
			return text.replace(RELATIVE_HREF, function () {
				return "=\"" + REDDIT_URL;
			});
		},

		unraw: function (text) {
			return _.unescape(this.host(text));
		}
	};
});
//# sourceMappingURL=../utils/url.js.map