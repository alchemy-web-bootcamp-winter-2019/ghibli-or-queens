import loadList from './list-component.js';

const URL = 'http://www.nokeynoshade.party/api/queens/all';

fetch(URL) 
    .then(response => response.json())
    .then(queens => {
        loadList(queens);
    })
    .catch(err => {
        console.error('fetch error', err);
    });
