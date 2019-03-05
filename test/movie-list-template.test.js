const test = QUnit.test;

function movieListTemplate() {
    return `
    <li>
      <a href="google.com">Castle in the Sky</a>
    </li>
    `;
}

QUnit.module('MOVIE LIST');

test('display list of movies', assert => {
  //arrange
    const expected = `
    <li>
      <a href="google.com">Castle in the Sky</a>
    </li>
    `;
  //act
    const result = movieListTemplate();
  //assert
    assert.equal(result, expected);

});