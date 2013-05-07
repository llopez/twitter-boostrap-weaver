var app,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = app || {};

jQuery(function() {
  var _ref;

  return app.TableModal = (function(_super) {
    __extends(TableModal, _super);

    function TableModal() {
      _ref = TableModal.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TableModal.prototype.el = "#tableModal";

    TableModal.prototype.events = {
      "click button#createTable": "createTable",
      "click button.close": "hide",
      "click button#cancelTable": "hide"
    };

    TableModal.prototype.hide = function() {
      return this.$el.modal("hide");
    };

    TableModal.prototype.show = function() {
      return this.$el.modal("show");
    };

    TableModal.prototype.cols = function() {
      return this.$el.find('input#inputColumnsCount').val() || '4';
    };

    TableModal.prototype.rows = function() {
      return this.$el.find('input#inputRowsCount').val() || '4';
    };

    TableModal.prototype.style = function() {
      return this.$el.find('input[name=tableStyle]:checked').val();
    };

    TableModal.prototype.createTable = function() {
      var view;

      this.hide();
      view = new app.TableView({
        cols: this.cols(),
        rows: this.rows(),
        style: this.style()
      });
      return app.area_view.draw(view.render().el);
    };

    return TableModal;

  })(Backbone.View);
});
