// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json(req.user);
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", function(req, res) {
        //receiving a request payload which is inside the request body or req.body 
        console.log(req.body);
        //get two pieces of data: email + password to be insterted into the table.
        db.User.create({
                email: req.body.email,
                password: req.body.password
            })
            .then(function() {
                res.redirect(307, "/api/login");
            })
            .catch(function(err) {
                res.status(401).json(err);
            });
    });

    // Route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function(req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });
};

// // *********************************************************************************
// // api-routes.js - this file offers a set of routes for displaying and saving data to the db
// // *********************************************************************************

// // Dependencies
// // =============================================================

// // Requiring our models
// var db = require("../models");

// // Routes
// // =============================================================
// module.exports = function(app) {

//     // GET route for getting all of the todos
//     app.get("/api/todos", function(req, res) {
//         // findAll returns all entries for a table when used with no options
//         db.Todo.findAll({}).then(function(dbTodo) {
//             // We have access to the todos as an argument inside of the callback function
//             res.json(dbTodo);
//         });
//     });

//     // POST route for saving a new todo
//     app.post("/api/todos", function(req, res) {
//         // create takes an argument of an object describing the item we want to
//         // insert into our table. In this case we just we pass in an object with a text
//         // and complete property (req.body)
//         db.Todo.create({
//                 text: req.body.text,
//                 complete: req.body.complete
//             }).then(function(dbTodo) {
//                 // We have access to the new todo as an argument inside of the callback function
//                 res.json(dbTodo);
//             })
//             .catch(function(err) {
//                 // Whenever a validation or flag fails, an error is thrown
//                 // We can "catch" the error to prevent it from being "thrown", which could crash our node app
//                 res.json(err);
//             });
//     });

//     // DELETE route for deleting todos. We can get the id of the todo to be deleted from
//     // req.params.id
//     app.delete("/api/todos/:id", function(req, res) {
//         // We just have to specify which todo we want to destroy with "where"
//         db.Todo.destroy({

//             //destroy is an object with a where property, and the value of the where property is a second object which has an id property which matches the id value of object . so this is just building our where clause under the hood. basically saying delete where ids match.
//             where: {
//                 id: req.params.id //,atches the id that was specified in request
//             }
//         }).then(function(dbTodo) {
//             res.json(dbTodo);
//         });

//     });

//     // PUT route for updating todos. We can get the updated todo data from req.body
//     app.put("/api/todos", function(req, res) {

//         // Update takes in an object describing the properties we want to update, and
//         // we use where to describe which objects we want to update
//         db.Todo.update({
//                 text: req.body.text,
//                 complete: req.body.complete
//             }, {
//                 where: {
//                     id: req.body.id
//                 }
//             }).then(function(dbTodo) {
//                 res.json(dbTodo);
//             })
//             .catch(function(err) {
//                 // Whenever a validation or flag fails, an error is thrown
//                 // We can "catch" the error to prevent it from being "thrown", which could crash our node app
//                 res.json(err);
//             });
//     });
// };