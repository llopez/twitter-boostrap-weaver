app = app or {}

jQuery ->
  class app.PaginationModal extends Backbone.View
    el: "#paginationModal"
    events:
      "click button#createPagination": "createPagination"
      "click button.close": "hide"
      "click button#cancelPagination": "hide"

    hide: ->
      @$el.modal "hide"

    show: ->
      @$el.modal "show"
      
    pages: ->
      @$el.find('input#inputPagesCount').val() or "5"

    style: ->
      @$el.find('input[name=paginationStyle]:checked').val()
      
    align: ->
      @$el.find('input[name=paginationAlign]:checked').val()

    createPagination: ->
      @hide()
      view = new app.PaginationView
        pages: @pages()
        style: @style()
        align: @align()
      app.area_view.draw view.render().el