app = app or {}

jQuery ->
  class app.TableView extends app.ElementView

    tagName: 'table'

    className: ->
      "table #{@options.style}"

    template: _.template("<thead></thead><tbody></tbody>")

    render: ->

      @$el.html @template(@options)

      @$el.draggable
        cancel: false
        cursor: "move"
    
      ths = _.reduce(_.range(@options.cols), (memo, num) ->
        memo += "<th>Title #{num}</th>"
      , "")

      tds = _.reduce(_.range(@options.cols), (memo, num) ->
        memo += "<td>column #{num}</td>"
      , "")
    
      @$el.find('thead').html("<tr>#{ths}</tr>")

      _.each(_.range(@options.rows), (x) ->
        @$el.find('tbody').append("<tr>#{tds}</tr>")
      , @)
      
      @