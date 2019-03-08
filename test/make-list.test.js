import { makeListOfFilms } from '../src/film-list-component.js';
const test = QUnit.test;

QUnit.module('Testing for the list of films function');


test('make list of films', assert => {
    //Arrange
    const film = {
        title: 'Castle in the Sky',
        released: 1986
    };
    //Act
    const result = makeListOfFilms(film);
    const expected = /*html*/ `
    <li><a href="">Castle in the Sky</a><span class="year"> (1986)</span></li>
    `;
    //Assert
    assert.htmlEqual(result, expected);
});