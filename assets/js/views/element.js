var app,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = app || {};

jQuery(function() {
  var _ref;

  return app.ElementView = (function(_super) {
    __extends(ElementView, _super);

    function ElementView() {
      _ref = ElementView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ElementView.prototype.render = function() {
      this.$el.html(this.template(this.options));
      this.$el.draggable({
        cancel: false,
        cursor: "move"
      });
      return this;
    };

    return ElementView;

  })(Backbone.View);
});
