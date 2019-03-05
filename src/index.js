import { makeListItem } from './make-list-component.js';
const filmListNode = document.getElementById('film-list');

fetch('https://ghibliapi.herokuapp.com/films')
    .then(response=>response.json())
    .then(results => {
        results.forEach (filmObject=>{
            console.log('filmObject', filmObject);
            filmListNode.appendChild(makeListItem(filmObject));
        });
    });


