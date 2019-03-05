import movieListTemplate from '../src/movie-list-template.js';
const test = QUnit.test;

const movie = {
    title: 'Castle in the Sky',
    url: 'https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe'
};

QUnit.module('MOVIE LIST');

test('display list of movies', assert => {
  //arrange
    const expected = `
    <li>
      <a href="https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe">Castle in the Sky</a>
    </li>
    `;
  //act
    const result = movieListTemplate(movie);
  //assert
    assert.equal(result, expected);

});