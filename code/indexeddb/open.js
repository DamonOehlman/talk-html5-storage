// create a database open request
var request = indexedDB.open('todolist'),
    db;

request.onsuccess = function(e) {
    // update the database reference
    db = e.target.result;
    console.log('successfully opened db: ' + db.name);
};

request.onfailure = function(e) {}; // TODO: handle errors