var app,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

app = app || {};

jQuery(function() {
  var _ref;

  return app.TableView = (function(_super) {
    __extends(TableView, _super);

    function TableView() {
      _ref = TableView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TableView.prototype.tagName = 'table';

    TableView.prototype.className = 'table';

    TableView.prototype.template = "<thead> <tr> <th>#</th> <th>First Name</th> <th>Last Name</th> <th>Username</th> </tr> </thead> <tbody> <tr> <td>1</td><td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <td>2</td> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr><td>3</td> <td>Larry</td> <td>the Bird</td> <td>@twitter</td> </tr> </tbody>";

    return TableView;

  })(app.ElementView);
});
