app = app or {}

jQuery ->
  "use strict"

  new app.Controller()
  Backbone.history.start()

  $("#main").droppable drop: (event, ui) ->
    $(ui.draggable).appendTo this
    $(ui.draggable).removeAttr "style"
