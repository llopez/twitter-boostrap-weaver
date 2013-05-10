class app.HeaderModal extends Backbone.View
  el: "#headerModal"
  events:
    "click button#createHeader": "createHeader"
    "click button.close": "hide"
    "click button#cancelHeader": "hide"

  hide: ->
    @$el.modal "hide"

  show: ->
    @$el.modal "show"
    
  text: ->
    @$el.find('input#inputText').val() or "Example page header"

  subtext: ->
    @$el.find('input#inputSubtext').val() or "Subtext for header"

  createHeader: ->
    @hide()
    view = new app.HeaderView(text: @text(), subtext: @subtext())
    app.area_view.draw view.render().el