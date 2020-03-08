# movies-angular-node
HOW TO INSTALL :

clone or download the repo.

for use the application - you must create a local database with name "moviesApp".

 create collection "users" and insert simple document: 

{
    "username" : "admin",
    "password" : "admin"
}

Otherwise you will not be able to connect because of the login system. (the application use JWT authentication).

browse to server folder - and run "npm install" - to install all packages.

run "npm start"  - to start the server.

browse to client folder.

and run "npm install" - to install all packages.

run "ng serve" to run development mode.

you dont need crete database, the application work with MongoDB ATLAS.

if you want to replace database - you need to set new connection (server folder => data => database.js)

enjoy !

