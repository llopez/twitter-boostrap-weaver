class app.ButtonModal extends Backbone.View
  el: "#buttonModal"
  events:
    "click button#createButton": "createButton"
    "click button.close": "hide"
    "click button#cancelButton": "hide"

  hide: ->
    @$el.modal "hide"

  show: ->
    @$el.modal "show"
    
  text: ->
    @$el.find('input#inputText').val() or "Button"

  size: ->
    @$el.find('input[name=buttonSize]:checked').val()

  createButton: ->
    @hide()
    view = new app.ButtonView(text: @text(), size: @size())
    app.area_view.draw view.render().el
