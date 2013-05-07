var app,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = app || {};

jQuery(function() {
  var _ref;

  return app.AlertView = (function(_super) {
    __extends(AlertView, _super);

    function AlertView() {
      _ref = AlertView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AlertView.prototype.tagName = 'div';

    AlertView.prototype.className = function() {
      return "alert alert-" + this.options.type;
    };

    AlertView.prototype.template = _.template("<button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Warning!</strong> <%= text %>");

    return AlertView;

  })(app.ElementView);
});
