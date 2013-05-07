var app,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = app || {};

jQuery(function() {
  var _ref;

  return app.PaginationView = (function(_super) {
    __extends(PaginationView, _super);

    function PaginationView() {
      _ref = PaginationView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    PaginationView.prototype.tagName = 'div';

    PaginationView.prototype.className = function() {
      return "pagination " + this.options.style + " " + this.options.align;
    };

    PaginationView.prototype.template = _.template("<ul></ul>");

    PaginationView.prototype.render = function() {
      var lis;

      this.$el.html(this.template(this.options));
      this.$el.draggable({
        cancel: false,
        cursor: "move"
      });
      lis = _.reduce(_.range(this.options.pages), function(memo, num) {
        return memo += "<li><a href='#'>" + (parseInt(num) + 1) + "</a></li>";
      }, "<li><a href='#'>&laquo;</a></li>");
      lis += "<li><a href='#'>&raquo;</a></li>";
      this.$el.find('ul').html(lis);
      return this;
    };

    return PaginationView;

  })(app.ElementView);
});
