app = app or {}

jQuery ->
  class app.HeaderView extends app.ElementView
    tagName: 'div'
    className: 'page-header'
    template: _.template("<h1> <%= text %> <small> <%= subtext %> </small> </h1>")
