var app,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = app || {};

jQuery(function() {
  "use strict";
  var _ref;

  return app.AreaView = (function(_super) {
    __extends(AreaView, _super);

    function AreaView() {
      _ref = AreaView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AreaView.prototype.el = '#area';

    AreaView.prototype.draw = function(e) {
      return this.$el.append(e);
    };

    AreaView.prototype.initialize = function() {
      return this.$el.droppable({
        drop: function(event, ui) {
          $(ui.draggable).appendTo(this);
          return $(ui.draggable).removeAttr("style");
        }
      });
    };

    return AreaView;

  })(Backbone.View);
});
