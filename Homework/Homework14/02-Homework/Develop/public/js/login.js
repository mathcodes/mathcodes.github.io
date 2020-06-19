//Unit-14-Full-Stack\02-Homework\Develop\public\js\login.js
$(document).ready(function() {
    // Getting references to our form and inputs
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
        $.post("/api/login", {
                email: email,
                password: password
            })
            .then(function() {
                window.location.replace("/members");
                // If there's an error, log the error
            })
            .catch(function(err) {
                console.log(err);
            });
    }
});


// // // *********************************************************************************
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