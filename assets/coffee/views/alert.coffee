app = app or {}

jQuery ->
  class app.AlertView extends app.ElementView
    tagName: 'div'
    className: 'alert'
    template: "<button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Warning!</strong> Best check yo self, you're not looking too good."
