import { makeMovieListTemplate } from '../src/makeMovieListTemplate.js';

const test = QUnit.test;

QUnit.module('MOVIE LIST TEMPLATE');

test('movie list template test', assert => {
    
    const movie = {
        title: 'Castle in the Sky',
        id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
        release_date: 1986
    };

    const expected = `
    <li>
        <a href="movie-details.html?id=2baf70d1-42bb-4437-b551-e5fed5a87abe">Castle in the Sky (1986)</a>
    </li>
    `;
    const result = makeMovieListTemplate(movie);
    assert.htmlEqual(result, expected);
});

test('different title and link for dynamics', assert => {
    
    const movie = {
        title: 'Grave of the Fireflies',
        id: '12cfb892-aac0-4c5b-94af-521852e46d6a',
        release_date: 1988
    };
    
    const expected = `
    <li>
        <a href="movie-details.html?id=12cfb892-aac0-4c5b-94af-521852e46d6a">Grave of the Fireflies (1988)</a>
    </li>
    `;
    const result = makeMovieListTemplate(movie);
    assert.htmlEqual(result, expected);
});


