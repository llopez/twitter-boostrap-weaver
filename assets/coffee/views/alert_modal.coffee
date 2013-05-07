app = app or {}

jQuery ->
  class app.AlertModal extends Backbone.View
    el: "#alertModal"
    events:
      "click button#createAlert": "createAlert"
      "click button.close": "hide"
      "click button#cancelAlert": "hide"

    hide: ->
      @$el.modal "hide"

    show: ->
      @$el.modal "show"
      
    text: ->
      @$el.find('input#inputText').val() or "This is the alert text!"

    type: ->
      @$el.find('input[name=alertType]:checked').val()

    createAlert: ->
      @hide()
      view = new app.AlertView
        text: @text()
        type: @type()
      app.area_view.draw view.render().el