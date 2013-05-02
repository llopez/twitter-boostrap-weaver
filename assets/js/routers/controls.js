var app,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = app || {};

jQuery(function() {
  var grid_modal, _ref;

  grid_modal = new app.GridModal();
  return app.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      _ref = Controller.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Controller.prototype.routes = {
      "insert/:element": "insert",
      grid: "gridModal"
    };

    Controller.prototype.insert = function(element) {
      var view;

      if (element === "table") {
        view = new app.TableView();
      }
      if (element === "button") {
        view = new app.ButtonView();
      }
      if (element === "alert") {
        view = new app.AlertView();
      }
      return $("#cook").append(view.render().el);
    };

    Controller.prototype.gridModal = function() {
      return grid_modal.show();
    };

    return Controller;

  })(Backbone.Router);
});
