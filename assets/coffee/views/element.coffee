app = app or {}

jQuery ->
  class app.ElementView extends Backbone.View
    render: ->
      @$el.html @template
      @$el.draggable
        cancel: false
        cursor: "move"
      @
