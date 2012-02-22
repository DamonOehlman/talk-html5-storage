// save the active user to local storage
localStorage.activeUser = JSON.stringify({
    name: 'Damon Oehlman',
    id: 'DamonOehlman'
});

// retrieve the active user from localStorage
console.log(localStorage.activeUser); 
// logs: '{ "name": "Damon Oehlman", "id": "DamonOehlman" }'