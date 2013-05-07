app = app or {}

jQuery ->
  "use strict"

  new app.Controller()
  Backbone.history.start()
  
  app.area_view = new app.AreaView()
