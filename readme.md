# User Management Backend Application

## Information
### It is a basic user management backend application with home, login and register endpoint
### It check user data is valid or not for register and login

## How I build
### Fist install all required packages in node.js namely express, mongoose, dotenv, cors
### created different files rather than put all data in one file
### express is used for server creation, application, routing, response and request
### mongoose is used for connecting application to the mongodb database
### dotenv to store important data such as environment variable
### cors for communicating different url and server

## How it works
### when start server.js it imports data from app.js. They are seperate files for listening application and other is for routing, connection to database
### In config folder db.js file is stored where using mongoose package application is connected to mongodb then exported the function database connection to app.js
### In models folder userModel.js file is created. It is schema for how to store data in database using mongoose model then it exported.
### In controllers folder userController.js file is created. User Schema file is imported in this file. All required method for routing are written in this file like home, register, login that method exported using module exports
### In routes folder userRoutes.js file is created and userController.js methods are imported. In this file different endpoints that is routes are combined with correct method and get and post requests are performed. then it exported to app.js then to server.js

## server.js => app.js => db.js => userRoutes.js => userController.js => userModel.js => app.js => server.js