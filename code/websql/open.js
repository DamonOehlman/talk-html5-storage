// open/create a database for the application (expected size ~ 100K)
var db = openDatabase(
    'todolist',             // database id
    '1.0',                  // database version 
    'To Do List Database',  // database title
    100 * 1024,             // expected size in bytes
    initDB                  // run when a db is created (see next slide)
);