var app;

app = app || {};

jQuery(function() {
  return app.GridModal = Backbone.View.extend({
    el: "#gridModal",
    events: {
      "click button#create": "createGrid",
      "click button.close": "hide",
      "click button#cancel": "hide",
      "change input": "log"
    },
    hide: function() {
      return this.$el.modal("hide");
    },
    show: function() {
      return this.$el.modal("show");
    },
    values: function() {
      var arr;

      arr = _.map(this.$el.find("input"), function(x) {
        return parseInt(x.value);
      });
      return _.compact(arr);
    },
    total: function() {
      return _.reduce(this.values(), (function(m, v) {
        return m + v;
      }), 0);
    },
    isValid: function() {
      return this.total() === 12;
    },
    createGrid: function() {
      var view;

      if (this.isValid()) {
        this.hide();
        view = new app.RowView({
          dimension: this.values()
        });
        return $("#cook").append(view.render().el);
      } else {
        return alert("The sum of the columns must be 12");
      }
    },
    log: function() {
      return this.$el.find("#total").html(this.total());
    }
  });
});
