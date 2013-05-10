class app.AlertView extends app.ElementView
  tagName: 'div'
  className: ->
    "alert alert-#{@options.type}"
  template: _.template("<button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Warning!</strong> <%= text %>")
