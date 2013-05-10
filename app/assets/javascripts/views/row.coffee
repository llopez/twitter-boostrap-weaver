class app.RowView extends app.ElementView
  tagName: "div"
  className: "row-fluid"
  render: ->
    _.each @options.dimension, ((d) ->
      columnView = new app.ColumnView(dimension: d)
      @$el.append columnView.render().el
    ), @
    @$el.draggable
      cancel: false
      cursor: "move"
    @