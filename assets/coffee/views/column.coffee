app = app or {}

jQuery ->
  class app.ColumnView extends Backbone.View
    tagName: "div"
    render: ->
      @$el.css "border", "1px dashed #ccc"
      @$el.css "min-height", "100px"
      @$el.attr "class", "span#{@options.dimension}"
      @$el.droppable drop: (event, ui) ->
        $(ui.draggable).appendTo this
        $(ui.draggable).removeAttr "style"
      @
