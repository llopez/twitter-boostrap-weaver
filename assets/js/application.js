var app = app || {};

$(function(){
  'use strict';
  
  // Models

  // Collections

  // Views  
  app.ElementView = Backbone.View.extend({
    render: function(){
      this.$el.html(this.template);
      this.$el.draggable({
        cancel: false,
        cursor: 'move'
      });
      return this;
    }
  }); 
  
  app.ButtonView = app.ElementView.extend({
    tagName: 'button',
    className: 'btn',
    template: "Button"
  });

  app.TableView = app.ElementView.extend({
    tagName: 'table',
    className: 'table',
    template: "<thead> <tr> <th>#</th> <th>First Name</th> <th>Last Name</th> <th>Username</th> </tr> </thead> <tbody> <tr> <td>1</td><td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <td>2</td> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr><td>3</td> <td>Larry</td> <td>the Bird</td> <td>@twitter</td> </tr> </tbody>"
  });
  
  app.AlertView = app.ElementView.extend({
    tagName: 'div',
    className: 'alert',
    template: "<button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Warning!</strong> Best check yo self, you're not looking too good."
  })

  app.GridModal = Backbone.View.extend({
    el: '#gridModal',
    events: {
      "click button#create" : "createGrid",
      "click button.close" : "hide",
      "click button#cancel" : "hide",
      "change input": "log"
    },
    hide: function(){
      this.$el.modal('hide');
    },
    show: function(){
      this.$el.modal('show');
    },
    values: function(){
      var arr = _.map(this.$el.find("input"), function(x){return parseInt(x.value)});
      return _.compact(arr)
    },
    total: function(){
      return _.reduce(this.values(), function(m ,v){return m + v}, 0);
    },
    isValid: function(){
      return this.total() == 12;
    },
    createGrid: function(){
      if(this.isValid()){
        this.hide();
        var view = new app.RowView({dimension: this.values()});
        $('#cook').append(view.render().el);
      }
      else
      {
        alert('The sum of the columns must be 12');
      }
    },
    log: function(){
      this.$el.find('#total').html(this.total());
    }
  })
  
  var gridModal = new app.GridModal();

  app.ColumnView = Backbone.View.extend({
    tagName: 'div',
    render: function(){
      this.$el.css('border', '1px dashed #ccc');
      this.$el.css('min-height', '100px');
      this.$el.attr('class', 'span' + this.options.dimension)
      this.$el.droppable({
        drop: function(event, ui){
          $(ui.draggable).appendTo(this);
          $(ui.draggable).removeAttr('style');
        }
      });
      return this;
    },
    initialize: function(options){
      console.log("Column Dimmension: " + this.options.dimension);
    }
  })

  app.RowView = app.ElementView.extend({
    tagName: 'div',
    className: 'row-fluid',
    render: function(){
      _.each(this.options.dimension, function(d){
        var columnView = new app.ColumnView({dimension: d});
        this.$el.append(columnView.render().el);
      }, this);
      this.$el.draggable({cancel: false, cursor: 'move'});
      return this;
    },
    initialize: function(options){
      console.log("Row Dimmension: " + this.options.dimension);
    }
  });

  // Routers
  
  app.Controller = Backbone.Router.extend({
    routes: {
      "insert/:element": "insert",
      "grid" : "gridModal"
    },
    insert: function(element){
      if(element == "table"){var view = new app.TableView()};
      if(element == "button"){var view = new app.ButtonView()};
      if(element == "alert"){var view = new app.AlertView()};
      $('#cook').append(view.render().el);
    },
    gridModal: function(){
      gridModal.show();
    }
  });

  // Main
  new app.Controller();
  Backbone.history.start();
  
  
  $('#main').droppable({
    drop: function(event, ui){
      $(ui.draggable).appendTo(this);
      $(ui.draggable).removeAttr('style');
    }
  });
});
