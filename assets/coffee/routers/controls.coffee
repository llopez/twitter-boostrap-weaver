app = app or {}

jQuery ->

  grid_modal = new app.GridModal()
  
  class app.Controller extends Backbone.Router
    routes:
      "insert/:element": "insert"
      grid: "gridModal"

    insert: (element) ->
      view = new app.TableView()  if element is "table"
      view = new app.ButtonView()  if element is "button"
      view = new app.AlertView()  if element is "alert"
      $("#cook").append view.render().el

    gridModal: ->
      grid_modal.show()