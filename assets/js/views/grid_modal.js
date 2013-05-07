var app,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = app || {};

jQuery(function() {
  var _ref;

  return app.GridModal = (function(_super) {
    __extends(GridModal, _super);

    function GridModal() {
      _ref = GridModal.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    GridModal.prototype.el = "#gridModal";

    GridModal.prototype.events = {
      "click button#create": "createGrid",
      "click button.close": "hide",
      "click button#cancel": "hide",
      "change input": "log"
    };

    GridModal.prototype.hide = function() {
      return this.$el.modal("hide");
    };

    GridModal.prototype.show = function() {
      return this.$el.modal("show");
    };

    GridModal.prototype.values = function() {
      var arr;

      arr = _.map(this.$el.find("input"), function(x) {
        return parseInt(x.value);
      });
      return _.compact(arr);
    };

    GridModal.prototype.total = function() {
      return _.reduce(this.values(), (function(m, v) {
        return m + v;
      }), 0);
    };

    GridModal.prototype.isValid = function() {
      return this.total() === 12;
    };

    GridModal.prototype.createGrid = function() {
      var view;

      if (this.isValid()) {
        this.hide();
        view = new app.RowView({
          dimension: this.values()
        });
        return app.area_view.draw(view.render().el);
      } else {
        return alert("The sum of the columns must be 12");
      }
    };

    GridModal.prototype.log = function() {
      return this.$el.find("#total").html(this.total());
    };

    return GridModal;

  })(Backbone.View);
});
