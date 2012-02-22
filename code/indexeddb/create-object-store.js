request.onsuccess = function(e) {
    var setVrequest = db.setVersion('1.0');

    setVrequest.onsuccess = function() {
        var store = db.createObjectStore(
                'todo', // title of the object store
                { keyPath: 'timeStamp' }
        );
    };
};