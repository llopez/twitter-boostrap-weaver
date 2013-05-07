var app,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = app || {};

jQuery(function() {
  var _ref;

  return app.PaginationModal = (function(_super) {
    __extends(PaginationModal, _super);

    function PaginationModal() {
      _ref = PaginationModal.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    PaginationModal.prototype.el = "#paginationModal";

    PaginationModal.prototype.events = {
      "click button#createPagination": "createPagination",
      "click button.close": "hide",
      "click button#cancelPagination": "hide"
    };

    PaginationModal.prototype.hide = function() {
      return this.$el.modal("hide");
    };

    PaginationModal.prototype.show = function() {
      return this.$el.modal("show");
    };

    PaginationModal.prototype.pages = function() {
      return this.$el.find('input#inputPagesCount').val() || "5";
    };

    PaginationModal.prototype.style = function() {
      return this.$el.find('input[name=paginationStyle]:checked').val();
    };

    PaginationModal.prototype.align = function() {
      return this.$el.find('input[name=paginationAlign]:checked').val();
    };

    PaginationModal.prototype.createPagination = function() {
      var view;

      this.hide();
      view = new app.PaginationView({
        pages: this.pages(),
        style: this.style(),
        align: this.align()
      });
      return app.area_view.draw(view.render().el);
    };

    return PaginationModal;

  })(Backbone.View);
});
