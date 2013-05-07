var app,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = app || {};

jQuery(function() {
  var alert_modal, button_modal, grid_modal, table_modal, _ref;

  grid_modal = new app.GridModal();
  button_modal = new app.ButtonModal();
  alert_modal = new app.AlertModal();
  table_modal = new app.TableModal();
  return app.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      _ref = Controller.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Controller.prototype.routes = {
      grid: "gridModal",
      button: "buttonModal",
      alert: "alertModal",
      table: "tableModal"
    };

    Controller.prototype.gridModal = function() {
      return grid_modal.show();
    };

    Controller.prototype.buttonModal = function() {
      return button_modal.show();
    };

    Controller.prototype.alertModal = function() {
      return alert_modal.show();
    };

    Controller.prototype.tableModal = function() {
      return table_modal.show();
    };

    return Controller;

  })(Backbone.Router);
});
