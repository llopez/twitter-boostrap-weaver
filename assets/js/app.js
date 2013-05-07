var app;

app = app || {};

jQuery(function() {
  "use strict";  new app.Controller();
  Backbone.history.start();
  return app.area_view = new app.AreaView();
});
