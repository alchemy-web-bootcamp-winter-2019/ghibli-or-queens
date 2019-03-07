const test = QUnit.test;

QUnit.module('make html template literal');


import { makeFilmList } from '../src/make-film-list.js';

const filmName = {
    "title": "Castle in the Sky",
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
};

test('make a dynamic html list', function(assert) {
    //arrange
    
      //act
    const result = makeFilmList(filmName);
    const expected = /*HTML*/` <li id="film"><a href="./description-page.html?id=2baf70d1-42bb-4437-b551-e5fed5a87abe">Castle in the Sky</a></li>`;


    //assert


    assert.htmlEqual(result, expected);
});