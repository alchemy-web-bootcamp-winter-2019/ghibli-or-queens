import loadQueenTable from './table-component.js';

const serachParams = new URLSearchParams(window.location.search);
const id = serachParams.get('id');

if(!id) {
    window.location = './';
}

const URL = `https://ghibliapi.herokuapp.com/films/${id}`;

// fetch(URL)
    // .then(response => response.json())
    // .then(result => loadQueenTable(result));