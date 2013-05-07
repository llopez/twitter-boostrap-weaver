var app,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = app || {};

jQuery(function() {
  var _ref;

  return app.TableView = (function(_super) {
    __extends(TableView, _super);

    function TableView() {
      _ref = TableView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TableView.prototype.tagName = 'table';

    TableView.prototype.className = function() {
      return "table " + this.options.style;
    };

    TableView.prototype.template = _.template("<thead></thead><tbody></tbody>");

    TableView.prototype.render = function() {
      var tds, ths;

      this.$el.html(this.template(this.options));
      this.$el.draggable({
        cancel: false,
        cursor: "move"
      });
      ths = _.reduce(_.range(this.options.cols), function(memo, num) {
        return memo += "<th>Title " + num + "</th>";
      }, "");
      tds = _.reduce(_.range(this.options.cols), function(memo, num) {
        return memo += "<td>column " + num + "</td>";
      }, "");
      this.$el.find('thead').html("<tr>" + ths + "</tr>");
      _.each(_.range(this.options.rows), function(x) {
        return this.$el.find('tbody').append("<tr>" + tds + "</tr>");
      }, this);
      return this;
    };

    return TableView;

  })(app.ElementView);
});
