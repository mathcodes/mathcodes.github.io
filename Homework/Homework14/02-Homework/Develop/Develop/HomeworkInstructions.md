# Unit 14 Sequelize Homework: Reverse Engineering Code

## Table of Contents
 - [Setup](#Setup)
 - [server.js](#server.js)
 - [package.json](#package.json)
 - [config.json](#config.json)
 - [api.js](#api-routes.js)
 - [html-routes.js](#html-routes.js)
 - [passport.js](#passport.js)
 - [login.js](#login.js")
 - [members.js](#members.js)
 - [signup.js](#signup.js)
 - [index.js](#index.js) 
 - [user.js](#user.js)
 - [login.html](#login.html)
 - [members.html](#members.html)
 - [`signup.html`](#signup.html)
 - [`style.css`](#style.css)
 

## Setup
Make sure to install your dependencies. 

- [ ] 1. Start by running

``` 
npm init
 ```
- [ ] 2. Install the dependencies using the command line shown or by right-clicking 
```
npm install mysql2 body-parser express express-session mysql2 sequelize sequelize-cli sequelizer eslint passport
```

 - [ ] 3. Navigate to the root directory and connect to the server using the command line shown as specified in ```package.json```.
```
npm start
```
 - [ ] 4. If you see something similar to what you see below, you are in good shape!
```
Executing (default): CREATE TABLE IF NOT EXISTS `Users` (`id` INTEGER NOT NULL auto_increment , `email` VARCHAR(255) NOT NULL UNIQUE, `password` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;      
Executing (default): SHOW INDEX FROM `Users` FROM `blogger`
==> �🌎  Listening on port 8000. Visit http://localhost:8000/ in your browser
```
 - [ ] 5. Breaking that up to show whats going on here, we have: 
```
Executing (default): 
CREATE TABLE IF NOT EXISTS `Users` 
(
  `id` INTEGER NOT NULL auto_increment , 
  `email` VARCHAR(255) NOT NULL UNIQUE, 
  `password` VARCHAR(255) NOT NULL, 
  `createdAt` DATETIME NOT NULL, 
  `updatedAt` DATETIME NOT NULL, 
  PRIMARY KEY (`id`)
) 
ENGINE=InnoDB;      

Executing (default): 
SHOW INDEX FROM `Users` FROM `blogger`

==> �🌎  Listening on port 8000. Visit http://localhost:8000/ in your browser
```
So we have a table named users created with 5 columns specified in 'single quotes'. The id is generated automatically by the default

 - [ ] 6. Next make sure your credentials in the config.json file match up with the ones you have setup in MySQL. Check that you have all dependencies inss Also be sure to make sure you receive the "Listening on port 8000" message in the console when you start the app.
 - [ ] 7. ```'port 8000'``` is specified in the server.js file llcated in the root directory ```/Develop```.

## Server.js

 - [ ] 8. The server.js code is really what initiates the application. Here is how: 
   - [ ] Requiring necessary npm packages
   - [ ] Requiring passport as we've configured it
```
var express = require("express");
var session = require("express-session");
var passport = require("./config/passport");
```
 - [ ] 9. Furthermore, the server.js file allows us to setup the port and require models for syncing

```
var PORT = process.env.PORT || 8000;
var db = require("./models");
```
### Middleware in server.js
 - [ ] 10. Creating express app and configuring middleware needed for authentication
```
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
```
 - [ ] 11. Utilize sessions to keep track of our user's login status:

```
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
```
### Requiring our routes:
 - [ ] 12. The code below sets up the html and api routes before we sync using sequelize.
```
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
```
 - [ ] 13. Syncing our database and logging a message to the user upon success
```
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});
```


 - [ ] 14. So basically the server.js file sets up the express app to handle data parsing, sets up a static directory, requires needed routes including api-routes.js, html-routes.js, and all the models in teh /models/ folder. Finally, ```server.js```, starts the server to begin listening with console.log:
```
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
```
## package.json
 - [ ] 15. Setup user and password to match mysql,
 - [ ] 16. Specify DB to get sequelize talking to the MySQL DB.
 - [ ] 17. Make sure all dependencies are installed by right-clicking the package.json file and clicking Install Dependencies

So in a nutshell... provides metadata on all installed NPM packages. 

## config.json
includes the username, password, database, and dialect for development, test, and production to connect to the MySQL database


## api-routes.js
### *requires /models and /config/passport

Provides routes sending data back and forth between the HTML pages and the database.


## html-routes.js
### *requires path andn isAuthenticated.js
Provides routes redirecting the user among the HTML pages. 

## passport.js
### *requires models, passport and passport-local
"Passport is authentication middleware for Node. It is designed to serve a singular purpose: authenticate requests...
...Passport recognizes that each application has unique authentication requirements. Authentication mechanisms, known as strategies, are packaged as individual modules. Applications can choose which strategies to employ, without creating unnecessary dependencies." - [passportjs.org/docs](http://www.passportjs.org/docs/)

This document essentially sets up Local Strategy as we want a login with a username/email and password while handling different scenarios like 
 - When a user tries to sign in this code runs
 - If there's no user with the given email
 - If there is a user with the given email, but the password the user gives us is incorrect
 - If none of the above, return the user

In order to help keep authentication state across HTTP requests, Sequelize needs to serialize and deserialize the user before exporting the configured passport using ```module.exports = passport;```. Many files will be requiring ```passport.js```. 

So in a nutshell... passport.js controls sign up and log in, keeping the user authenticated across the multiple webpages.

## isAuthenticated.js
Determines if the user is logged in or not, and routes the user to the login page if he or she isn’t logged in and sends the user to the next page.

## login.js
After getting references for our form and inputs, we take the input and validate the password and email. If valid we run the loginUser function, clear the form and post to our "api/login" route where we are directed to the members page is all goes well. If invalid the error will be console.logged.

In a nutshell... uses jQuery to log the user in once a button to submit a login form is clicked.


## members.js
This file simply implements a GET request to figure out which user is logged in and updates the HTML on the page.

## signup.js
Same situation as the login.js file except the function posts to the "signup" route. Uses jQuery to sign the user up once a button to submit a signup form is clicked. Email and password are validated and cannot be blank.

## index.js
Connects the front end to the back end by requiring Sequelize. We’ll start with index.js as it sets up all the models for our application

Line 1 indicates that this file must be read in strict mode — meaning JavaScript should have no grace for syntax issues (like referencing undeclared variables) that it would normally process with no problem. Strict mode makes sure the JavaScript is more secure and error-free. This is important for this particular file as it is creating and modeling all of the tables in the database.

Lines 3–5 are requiring the dependencies for this particular file.

•	fs refers to Node’s built in module for interacting with files on the server. 

•	path aids in constructing absolute file paths. 

•	sequelize is the ORM package being used for this particular application.

Next we initialize variables that index.js will use later. 

Line 6 declares a variable to hold the absolute path of the current file. 

Line 7 declares a variable that stores the current environment (development, test, or production) if it is set by the application and defaults to ‘development’ if not. 

Line 8 requires the config.json file and asks specifically for the key associated with the environment that was set on Line 7.

Line 9 creates an empty object and stores it in a variable called db.

Lines 11–15 check whether specific environmental variables have been set and then creates a new instance of Sequelize using the MySQL credentials stored in the environment or in config.json if no environmental variables are set. This becomes our connection point to the database that is powering the Node app.

Lines 17–24 use File System method .readdirSync() built into Node to read every file in the current directory, loop through each, and filter a new array of files that are not hidden files, aren’t the current file, and are .js files. Then use Sequelize to import each of these files, which contain code setting up our individual Sequelize models (and our database tables), and store them within the db object. All of our model objects for each table in our database are now effectively accessible through a single object, db.

Lines 26–30 loops through each of these models. If they have a key of associate (which means in our individual model file they are being set to associate with another model), we’ll pass the db object containing all of our models to it. The associate key on each model is a function that would associate that particular key to a key in another model.

The remaining lines add both the package constructor Sequelize and the new instance of it (sequelize) to the db object for easy access and finally, db is exported for use in other files.


## user.js
Standardizes user login data, requiring that the email and password be entered.

## login.html
Contains the login form.

## members.html
Displays the members who have signed up.

## signup.html
Contains the signup form.

## style.css
Keeps the form at a uniform distance of 50 pixels from the top of the page on both the signup and login pages.


