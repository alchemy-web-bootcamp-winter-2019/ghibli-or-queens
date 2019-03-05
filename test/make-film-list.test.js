import { makeFilmList } from '../src/list/film-list-component.js';

const test = QUnit.test;

QUnit.module('generate list of films');

const film = {
    title: 'Castle in the Sky',
    release_date: 1986,
    id: '2baf70d1-42bb-4437-b551-e5fed5a87abe'
};

test('make template for list of all films', assert => {
    const result = makeFilmList(film);
    const expected = /*html*/
    `<li>
        <a href="film-detail.html?id=2baf70d1-42bb-4437-b551-e5fed5a87abe">Castle in the Sky</a><span> (1986)</span>
    </li>`;

    assert.htmlEqual(result, expected);
});