grid_modal = new app.GridModal()
button_modal = new app.ButtonModal()
alert_modal = new app.AlertModal()
table_modal = new app.TableModal()
pagination_modal = new app.PaginationModal()
header_modal = new app.HeaderModal()

class app.Controller extends Backbone.Router
  routes:
    grid: "gridModal"
    button: "buttonModal"
    alert: "alertModal"
    table: "tableModal"
    pagination: "paginationModal"
    header: "headerModal"

  gridModal: ->
    grid_modal.show()

  buttonModal: ->
    button_modal.show()
    
  alertModal: ->
    alert_modal.show()
    
  tableModal: ->
    table_modal.show()
    
  paginationModal: ->
    pagination_modal.show()
    
  headerModal: ->
    header_modal.show()