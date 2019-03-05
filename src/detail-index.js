import { loadQueenDetail } from './queen-detail.js';

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
const urlId = `https://www.nokeynoshade.party/api/queens/${id}`;

fetch(urlId)
    .then(response => response.json())
    .then(results => {
        loadQueenDetail(results);
    });