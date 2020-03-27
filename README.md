# Burger Logger

## Description
The burger logger is a simple web app demonstrating the MVC design paradigm, with a burger model interacting with a MySQL database, a burger controller directing routes based on user interactions, and a burger view (i.e. the page) that is updated accordingly. The layers of code separating the MySQL database and the user consist of the promise-based ORM querying the database, the functions in the burger model burger.js calling the ORM, the burger controller calling the burger functions at each route, and the server which sets up the Handlebars template engine rendering the view.

The burger logger is deployed to Heroku here: https://secret-sea-43270.herokuapp.com/

## Credits
The burger logger uses [Node.js](https://nodejs.org/en/) and [Express](http://expressjs.com/) to create and run the server, and the [mysql](https://www.npmjs.com/package/mysql) and [Express Handlebars](https://www.npmjs.com/package/express-handlebars) npm modules to connect to/query the database and generate the page view respectively. On Heroku, the [JawsDB add-on](https://devcenter.heroku.com/articles/jawsdb) is used to run an instance of MySQL in the cloud and store the burger table. The [jQuery](https://jquery.com/) JavaScript library is used to write the client-side JS.

The burger icon used as the favicon and on the jumbotron was taken from the collection of icons at [Font Awesome](https://fontawesome.com/). The burger image is from [Wikipedia](https://en.wikipedia.org/wiki/Hamburger).

The design of the burger logger is based on guidelines by the Coding Boot Camp at UT, and has been made responsive with the use of [Bootstrap](https://getbootstrap.com/).

## License
Copyright (c) Angela Li. All rights reserved.
Licensed under the [MIT License](LICENSE).