// we have a reference to store from some previous heavy lifting
// so now put something in the store
var request = store.put({
    text: 'Write a nice wrapper to IndexedDB',
    timeStamp: new Date().getTime()
});

request.onsuccess = function(e) {
    // item added
};