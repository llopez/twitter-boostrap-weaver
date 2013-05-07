app = app or {}

jQuery ->
  class app.PaginationView extends app.ElementView
    tagName: 'div'

    className: ->
      "pagination #{@options.style} #{@options.align}"

    template: _.template("<ul></ul>")

    render: ->

      @$el.html @template(@options)

      @$el.draggable
        cancel: false
        cursor: "move"
    
      lis = _.reduce(_.range(@options.pages), (memo, num) ->
        memo += "<li><a href='#'>#{parseInt(num) + 1}</a></li>"
      , "<li><a href='#'>&laquo;</a></li>")
            
      lis += "<li><a href='#'>&raquo;</a></li>"
    
      @$el.find('ul').html(lis)
      
      @