var app,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = app || {};

jQuery(function() {
  var _ref;

  return app.AlertModal = (function(_super) {
    __extends(AlertModal, _super);

    function AlertModal() {
      _ref = AlertModal.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AlertModal.prototype.el = "#alertModal";

    AlertModal.prototype.events = {
      "click button#createAlert": "createAlert",
      "click button.close": "hide",
      "click button#cancelAlert": "hide"
    };

    AlertModal.prototype.hide = function() {
      return this.$el.modal("hide");
    };

    AlertModal.prototype.show = function() {
      return this.$el.modal("show");
    };

    AlertModal.prototype.text = function() {
      return this.$el.find('input#inputText').val() || "This is the alert text!";
    };

    AlertModal.prototype.type = function() {
      return this.$el.find('input[name=alertType]:checked').val();
    };

    AlertModal.prototype.createAlert = function() {
      var view;

      this.hide();
      view = new app.AlertView({
        text: this.text(),
        type: this.type()
      });
      return app.area_view.draw(view.render().el);
    };

    return AlertModal;

  })(Backbone.View);
});
