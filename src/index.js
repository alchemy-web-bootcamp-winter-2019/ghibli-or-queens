import renderListItem from './'
//write a fetch request to the api lul

const URL = 'https://ghibliapi.herokuapp.com';

fetch(URL).then(response => response.json()).then(filmJson => function(filmJson));

console.log(URL);