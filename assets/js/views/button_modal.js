var app,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = app || {};

jQuery(function() {
  var _ref;

  return app.ButtonModal = (function(_super) {
    __extends(ButtonModal, _super);

    function ButtonModal() {
      _ref = ButtonModal.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ButtonModal.prototype.el = "#buttonModal";

    ButtonModal.prototype.events = {
      "click button#createButton": "createButton",
      "click button.close": "hide",
      "click button#cancelButton": "hide"
    };

    ButtonModal.prototype.hide = function() {
      return this.$el.modal("hide");
    };

    ButtonModal.prototype.show = function() {
      return this.$el.modal("show");
    };

    ButtonModal.prototype.text = function() {
      return this.$el.find('input#inputText').val() || "Button";
    };

    ButtonModal.prototype.size = function() {
      return this.$el.find('input[name=buttonSize]:checked').val();
    };

    ButtonModal.prototype.createButton = function() {
      var view;

      this.hide();
      view = new app.ButtonView({
        text: this.text(),
        size: this.size()
      });
      return app.area_view.draw(view.render().el);
    };

    return ButtonModal;

  })(Backbone.View);
});
