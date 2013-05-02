app = app or {}

jQuery ->
  class app.ButtonView extends app.ElementView
    tagName: 'button'
    className: 'btn'
    template: 'Button'