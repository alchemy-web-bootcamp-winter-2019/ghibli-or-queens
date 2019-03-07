import loadQueenTable from './table-component.js';

const serachParams = new URLSearchParams(window.location.search);
const id = serachParams.get('id');

if(!id) {
    window.location = './';
}

const URL = `http://www.nokeynoshade.party/api/queens/${id}`;

fetch(URL)
    .then(response => response.json())
    .then(result => loadQueenTable(result));