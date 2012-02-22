// given we know the timestap of a todo, we can retrieve it
var request = store.get(todoTimestamp);

request.onsuccess = function(e) {
    // item retrieved
};