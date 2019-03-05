import loadDetail from "./createDetail";

const searchParam = new URLSearchParams(window.location.search);

const id = searchParam.get('id');

const url = `https://ghibliapi.herokuapp.com/films/${id}`;

fetch(url)
    .then(response => response.json)
    .then(result => {
        loadDetail(result);
    });