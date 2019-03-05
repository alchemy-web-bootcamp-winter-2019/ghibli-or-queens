import loadQueens from './list-component.js';

const URL = 'http://www.nokeynoshade.party/api/queens/all';

let queens = [];

fetch(URL)
    .then(response => response.json())
    .then(results => {
        queens = results;
        console.log(results);
        loadQueens(queens);
    });
