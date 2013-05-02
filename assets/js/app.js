var app;

app = app || {};

jQuery(function() {
  "use strict";  new app.Controller();
  Backbone.history.start();
  return $("#main").droppable({
    drop: function(event, ui) {
      $(ui.draggable).appendTo(this);
      return $(ui.draggable).removeAttr("style");
    }
  });
});
