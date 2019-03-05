import renderHtmlMovieList from '../src/film-list-component.js';
const test = QUnit.test;

QUnit.module('create template literal of movie lists');

test('time to write a create dynamic html page', function(assert) {
    //arrange
    const movieName = {
        'title': 'Castle In The Sky',
        'id': '2baf70d1-42bb-4437-b551-e5fed5a87abe'
    };
    //act
    const result = renderHtmlMovieList(movieName);
    const expected = `<li>
    <a href="./film-details.html/2baf70d1-42bb-4437-b551-e5fed5a87abe">Castle In The Sky</a>
    </li>`;
    //assert

    assert.htmlEqual(result, expected);
});