import { makeListOfFilms } from '../src/film-list-component.js';
const test = QUnit.test;

QUnit.module('Testing for the list of films function');


test('make list of films', assert => {
    //Arrange
    const film = {
        title: 'Castle in the Sky',
        release_date: 1986,
        id: '2baf70d1-42bb-4437-b551-e5fed5a87abe'
    };
    //Act
    const result = makeListOfFilms(film);
    const expected = /*html*/ `
    <li><a href="film-detail.html?id=2baf70d1-42bb-4437-b551-e5fed5a87abe">Castle in the Sky</a><span class="year"> 1986</span></li>
    `;
    //Assert
    assert.htmlEqual(result, expected);
});