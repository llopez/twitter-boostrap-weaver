//= require_directory ./views
//= require_directory ./routers
//= require_self

jQuery(function(){
  new app.Controller();
  Backbone.history.start();
  app.area_view = new app.AreaView();
});
