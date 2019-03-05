import { loadQueens } from './queen-list.js';

const url = 'https://www.nokeynoshade.party/api/queens/all';

fetch(url)
    .then(response => response.json())
    .then(results => {
        loadQueens(results);
    });
