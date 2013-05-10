class app.ElementView extends Backbone.View
  render: ->
    @$el.html @template(@options)
    @$el.draggable
      cancel: false
      cursor: "move"
    @
