import { loadQueens } from "./queen-list.js";
import { loadQueenDetail } from "./queen-detail.js";

const url = 'https://www.nokeynoshade.party/api/queens/all';

fetch(url)
    .then(response => response.json())
    .then(results => {
        loadQueens(results);
    });

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
const urlId = `https://www.nokeynoshade.party/api/queens/${id}`;

fetch(urlId)
    .then(response => response.json())
    .then(results => {
        loadQueenDetail(results);
    });