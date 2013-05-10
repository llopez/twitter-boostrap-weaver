class app.TableModal extends Backbone.View
  el: "#tableModal"
  events:
    "click button#createTable": "createTable"
    "click button.close": "hide"
    "click button#cancelTable": "hide"

  hide: ->
    @$el.modal "hide"

  show: ->
    @$el.modal "show"
    
  cols: ->
    @$el.find('input#inputColumnsCount').val() or '4'

  rows: ->
    @$el.find('input#inputRowsCount').val() or '4'

  style: ->
    @$el.find('input[name=tableStyle]:checked').val()
        
  createTable: ->
    @hide()
    view = new app.TableView(cols: @cols(), rows: @rows(), style: @style())
    app.area_view.draw view.render().el