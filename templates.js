define(["jade"],function(jade){

var tpl = {};tpl.error = function (locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<h1>Error! Please check your connection..</h1>");;return buf.join("");
}
tpl.loading = function (locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<h1>LOADING<img src=\"images/loading.gif\" class=\"loading\"/></h1>");;return buf.join("");
}
tpl.comment = function (locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (moment, url) {
jade_mixins["comment"] = function(model){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if ( model.kind === 'more')
{
buf.push("<!-- @TODO loading more comments is not implemented--><!--h5 MORE-->");
}
else
{
buf.push("<div class=\"media comment\"><div class=\"media-left\"></div><div class=\"media-body\"><div class=\"panel panel-default\"><div class=\"panel-body\">" + (((jade_interp = url.unraw(model.body_html)) == null ? '' : jade_interp)) + "</div><div class=\"panel-footer\">Author:&nbsp;<a" + (jade.attr("href", 'https://www.reddit.com/u/' + model.author, true, false)) + ">" + (jade.escape(null == (jade_interp = model.author) ? "" : jade_interp)) + "</a>. Created at " + (jade.escape((jade_interp = moment.unix(model.created_utc).format('YYYY-mm-DD HH:mm')) == null ? '' : jade_interp)) + "</div></div>");
if ( model.replies)
{
// iterate model.replies
;(function(){
  var $$obj = model.replies;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var reply = $$obj[$index];

jade_mixins["comment"](reply);
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var reply = $$obj[$index];

jade_mixins["comment"](reply);
    }

  }
}).call(this);

}
buf.push("</div></div>");
}
};}.call(this,"moment" in locals_for_with?locals_for_with.moment:typeof moment!=="undefined"?moment:undefined,"url" in locals_for_with?locals_for_with.url:typeof url!=="undefined"?url:undefined));;return buf.join("");
}
tpl.post = function (locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;









;return buf.join("");
}
tpl.comments = function (locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (models, moment, post, undefined, url) {
jade_mixins["comment"] = function(model){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if ( model.kind === 'more')
{
buf.push("<!-- @TODO loading more comments is not implemented--><!--h5 MORE-->");
}
else
{
buf.push("<div class=\"media comment\"><div class=\"media-left\"></div><div class=\"media-body\"><div class=\"panel panel-default\"><div class=\"panel-body\">" + (((jade_interp = url.unraw(model.body_html)) == null ? '' : jade_interp)) + "</div><div class=\"panel-footer\">Author:&nbsp;<a" + (jade.attr("href", 'https://www.reddit.com/u/' + model.author, true, false)) + ">" + (jade.escape(null == (jade_interp = model.author) ? "" : jade_interp)) + "</a>. Created at " + (jade.escape((jade_interp = moment.unix(model.created_utc).format('YYYY-mm-DD HH:mm')) == null ? '' : jade_interp)) + "</div></div>");
if ( model.replies)
{
// iterate model.replies
;(function(){
  var $$obj = model.replies;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var reply = $$obj[$index];

jade_mixins["comment"](reply);
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var reply = $$obj[$index];

jade_mixins["comment"](reply);
    }

  }
}).call(this);

}
buf.push("</div></div>");
}
};
jade_mixins["post"] = function(model){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"media post\"><div class=\"media-body\"><h2 class=\"media-heading\"><a" + (jade.attr("href", model.url, true, false)) + ">" + (((jade_interp = model.title) == null ? '' : jade_interp)) + "</a></h2>");
if ( model.selftext)
{
buf.push("<div class=\"well well-sm\">" + (((jade_interp = url.unraw(model.selftext_html)) == null ? '' : jade_interp)) + "</div>");
}
buf.push("<a" + (jade.attr("href", url.port(model.permalink), true, false)) + " class=\"fn-click btn btn-default\">comments: &nbsp;<span class=\"badge\">" + (jade.escape(null == (jade_interp = model.num_comments) ? "" : jade_interp)) + "</span></a>&nbsp;<a class=\"btn btn-default\">created at: &nbsp;" + (jade.escape(null == (jade_interp = moment.unix(model.created_utc).format('YYYY-mm-DD HH:mm')) ? "" : jade_interp)) + "</a>&nbsp;<a class=\"btn btn-default\">by " + (jade.escape((jade_interp = model.author) == null ? '' : jade_interp)) + "</a></div></div>");
};
buf.push("<div class=\"container\"><div class=\"row\"><div class=\"col-lg-12\">");
jade_mixins["post"](post);
buf.push("</div></div><div class=\"row\"><div class=\"col-lg-12\">");
// iterate models
;(function(){
  var $$obj = models;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var model = $$obj[$index];

jade_mixins["comment"](model);
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var model = $$obj[$index];

jade_mixins["comment"](model);
    }

  }
}).call(this);

buf.push("</div></div></div>");}.call(this,"models" in locals_for_with?locals_for_with.models:typeof models!=="undefined"?models:undefined,"moment" in locals_for_with?locals_for_with.moment:typeof moment!=="undefined"?moment:undefined,"post" in locals_for_with?locals_for_with.post:typeof post!=="undefined"?post:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"url" in locals_for_with?locals_for_with.url:typeof url!=="undefined"?url:undefined));;return buf.join("");
}
tpl.posts = function (locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (collection, models, moment, undefined, url) {
jade_mixins["post"] = function(model){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"media post\"><div class=\"media-body\"><h2 class=\"media-heading\"><a" + (jade.attr("href", model.url, true, false)) + ">" + (((jade_interp = model.title) == null ? '' : jade_interp)) + "</a></h2>");
if ( model.selftext)
{
buf.push("<div class=\"well well-sm\">" + (((jade_interp = url.unraw(model.selftext_html)) == null ? '' : jade_interp)) + "</div>");
}
buf.push("<a" + (jade.attr("href", url.port(model.permalink), true, false)) + " class=\"fn-click btn btn-default\">comments: &nbsp;<span class=\"badge\">" + (jade.escape(null == (jade_interp = model.num_comments) ? "" : jade_interp)) + "</span></a>&nbsp;<a class=\"btn btn-default\">created at: &nbsp;" + (jade.escape(null == (jade_interp = moment.unix(model.created_utc).format('YYYY-mm-DD HH:mm')) ? "" : jade_interp)) + "</a>&nbsp;<a class=\"btn btn-default\">by " + (jade.escape((jade_interp = model.author) == null ? '' : jade_interp)) + "</a></div></div>");
};
// iterate models
;(function(){
  var $$obj = models;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var model = $$obj[$index];

jade_mixins["post"](model);
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var model = $$obj[$index];

jade_mixins["post"](model);
    }

  }
}).call(this);

buf.push("<nav><ul class=\"pagination pagination-lg\"><li" + (jade.cls(['arrow',collection.hasPreviousPage() ? '' : 'disabled'], [null,true])) + "><a href=\"#\" class=\"prev\">&laquo; previous</a></li><li" + (jade.cls(['arrow',collection.hasNextPage() ? '' : 'disabled'], [null,true])) + "><a href=\"#\" class=\"next\">next &raquo;</a></li></ul></nav>");}.call(this,"collection" in locals_for_with?locals_for_with.collection:typeof collection!=="undefined"?collection:undefined,"models" in locals_for_with?locals_for_with.models:typeof models!=="undefined"?models:undefined,"moment" in locals_for_with?locals_for_with.moment:typeof moment!=="undefined"?moment:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"url" in locals_for_with?locals_for_with.url:typeof url!=="undefined"?url:undefined));;return buf.join("");
}
tpl.subreddit = function (locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (model, undefined) {
buf.push("<h1>/r/" + (jade.escape((jade_interp = model.name) == null ? '' : jade_interp)) + "</h1><nav><ul class=\"nav nav-pills type\">");
// iterate ['hot', 'new', 'rising', 'controversial', 'top']
;(function(){
  var $$obj = ['hot', 'new', 'rising', 'controversial', 'top'];
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var type = $$obj[$index];

buf.push("<li" + (jade.cls([(type === model.type ? 'active' : '')], [true])) + "><a" + (jade.attr("href", '?/' + model.name + '/' + type, true, false)) + " class=\"fn-click\">" + (jade.escape(null == (jade_interp = type) ? "" : jade_interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var type = $$obj[$index];

buf.push("<li" + (jade.cls([(type === model.type ? 'active' : '')], [true])) + "><a" + (jade.attr("href", '?/' + model.name + '/' + type, true, false)) + " class=\"fn-click\">" + (jade.escape(null == (jade_interp = type) ? "" : jade_interp)) + "</a></li>");
    }

  }
}).call(this);

if ( 'comment' === model.type)
{
buf.push("<li class=\"active\"><a>comments</a></li>");
}
buf.push("</ul></nav>");}.call(this,"model" in locals_for_with?locals_for_with.model:typeof model!=="undefined"?model:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}
return tpl;

});
