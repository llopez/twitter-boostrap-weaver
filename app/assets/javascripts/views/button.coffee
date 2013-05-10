class app.ButtonView extends app.ElementView
  tagName: 'button'
  className: ->
    "btn btn-#{@options.size}"
  template: _.template("<%= text %>")