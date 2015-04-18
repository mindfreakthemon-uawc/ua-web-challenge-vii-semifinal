define(['underscore'], function (_) {
	_.mixin({
		toQueryString: function (data) {
			var qs = _.reduce(data,
				function (components, value, key) {
					components.push(key + '=' + encodeURIComponent(value));

					return components;
				}, []).join('&');

			return qs ? '?' + qs : '';
		},

		fromQueryString: function (qs) {
			return _.reduce(qs.replace('?', '').split('&'),
				function (data, parameter) {
					if (parameter.length > 0) {
						_.extend(data, _.object([_.map(parameter.split('='), decodeURIComponent)]));
					}

					return data;
				}, {});
		}
	});
});