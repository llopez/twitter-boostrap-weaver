app = app or {}

jQuery ->
  class app.GridModal extends Backbone.View
    el: "#gridModal"
    events:
      "click button#create": "createGrid"
      "click button.close": "hide"
      "click button#cancel": "hide"
      "change input": "log"

    hide: ->
      @$el.modal "hide"

    show: ->
      @$el.modal "show"

    values: ->
      arr = _.map(@$el.find("input"), (x) ->
        parseInt x.value
      )
      _.compact arr

    total: ->
      _.reduce @values(), ((m, v) ->
        m + v
      ), 0

    isValid: ->
      @total() is 12

    createGrid: ->
      if @isValid()
        @hide()
        view = new app.RowView(dimension: @values())
        $("#cook").append view.render().el
      else
        alert "The sum of the columns must be 12"

    log: ->
      @$el.find("#total").html @total()
  )