var app,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = app || {};

jQuery(function() {
  var _ref;

  return app.ColumnView = (function(_super) {
    __extends(ColumnView, _super);

    function ColumnView() {
      _ref = ColumnView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ColumnView.prototype.tagName = "div";

    ColumnView.prototype.render = function() {
      this.$el.css("border", "1px dashed #ccc");
      this.$el.css("min-height", "100px");
      this.$el.attr("class", "span" + this.options.dimension);
      this.$el.droppable({
        drop: function(event, ui) {
          $(ui.draggable).appendTo(this);
          return $(ui.draggable).removeAttr("style");
        }
      });
      return this;
    };

    return ColumnView;

  })(Backbone.View);
});
