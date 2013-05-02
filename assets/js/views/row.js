var app,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = app || {};

jQuery(function() {
  var _ref;

  return app.RowView = (function(_super) {
    __extends(RowView, _super);

    function RowView() {
      _ref = RowView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    RowView.prototype.tagName = "div";

    RowView.prototype.className = "row-fluid";

    RowView.prototype.render = function() {
      _.each(this.options.dimension, (function(d) {
        var columnView;

        columnView = new app.ColumnView({
          dimension: d
        });
        return this.$el.append(columnView.render().el);
      }), this);
      this.$el.draggable({
        cancel: false,
        cursor: "move"
      });
      return this;
    };

    return RowView;

  })(app.ElementView);
});
