var app,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = app || {};

jQuery(function() {
  var _ref;

  return app.ButtonView = (function(_super) {
    __extends(ButtonView, _super);

    function ButtonView() {
      _ref = ButtonView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ButtonView.prototype.tagName = 'button';

    ButtonView.prototype.className = function() {
      return "btn btn-" + this.options.size;
    };

    ButtonView.prototype.template = _.template("<%= text %>");

    return ButtonView;

  })(app.ElementView);
});
