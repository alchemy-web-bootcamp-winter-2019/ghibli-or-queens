import { createListEntry } from './renderlistitem.js';
//write a fetch request to the api lul

const URL = 'https://ghibliapi.herokuapp.com/films/';

fetch(URL).then(response => response.json()).then(filmJson => createListEntry(filmJson));