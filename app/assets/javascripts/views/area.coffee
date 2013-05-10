class app.AreaView extends Backbone.View
  el: '#area'
  draw: (e) ->
    @$el.append e
  initialize: ->
    @$el.droppable
      drop: (event, ui) ->
        $(ui.draggable).appendTo @
        $(ui.draggable).removeAttr "style"
