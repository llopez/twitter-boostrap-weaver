app = app or {}

jQuery ->
  class app.TableView extends app.ElementView
    tagName: 'table'
    className: 'table'
    template: "<thead> <tr> <th>#</th> <th>First Name</th> <th>Last Name</th> <th>Username</th> </tr> </thead> <tbody> <tr> <td>1</td><td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <td>2</td> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr><td>3</td> <td>Larry</td> <td>the Bird</td> <td>@twitter</td> </tr> </tbody>"
