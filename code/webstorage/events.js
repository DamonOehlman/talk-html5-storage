window.addEventListener('storage', function(evt) {
    console.log('The value of the ' + evt.key + ' has changed');
    console.log('old value = ' + evt.oldValue);
    console.log('new value = ' + evt.newValue);
}, false);