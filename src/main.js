import { loadQueens } from "./queen-list.js";

const url = 'http://www.nokeynoshade.party/api/queens/all';

fetch(url)
    .then(response => response.json())
    .then(results => {
        loadQueens(results);
    });

const searchParams = new URLSearchParams(window.location.search);
