var app,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = app || {};

jQuery(function() {
  var _ref;

  return app.HeaderModal = (function(_super) {
    __extends(HeaderModal, _super);

    function HeaderModal() {
      _ref = HeaderModal.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    HeaderModal.prototype.el = "#headerModal";

    HeaderModal.prototype.events = {
      "click button#createHeader": "createHeader",
      "click button.close": "hide",
      "click button#cancelHeader": "hide"
    };

    HeaderModal.prototype.hide = function() {
      return this.$el.modal("hide");
    };

    HeaderModal.prototype.show = function() {
      return this.$el.modal("show");
    };

    HeaderModal.prototype.text = function() {
      return this.$el.find('input#inputText').val() || "Example page header";
    };

    HeaderModal.prototype.subtext = function() {
      return this.$el.find('input#inputSubtext').val() || "Subtext for header";
    };

    HeaderModal.prototype.createHeader = function() {
      var view;

      this.hide();
      view = new app.HeaderView({
        text: this.text(),
        subtext: this.subtext()
      });
      return app.area_view.draw(view.render().el);
    };

    return HeaderModal;

  })(Backbone.View);
});
