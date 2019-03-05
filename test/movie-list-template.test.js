import { movieListTemplate } from '../src/movie-list-template.js';
const test = QUnit.test;

const movie = {
    title: 'Castle in the Sky',
    id: '2baf70d1-42bb-4437-b551-e5fed5a87abe'
};

QUnit.module('MOVIE LIST');

test('display list of movies', assert => {
  //arrange
    const expected = `
    <li>
      <a href="details.html?id=2baf70d1-42bb-4437-b551-e5fed5a87abe">Castle in the Sky</a>
    </li>
    `;
  //act
    const result = movieListTemplate(movie);
  //assert
    assert.htmlEqual(result, expected);

});