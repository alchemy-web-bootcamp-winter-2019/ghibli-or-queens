const test = QUnit.test;

QUnit.module('MOVIE LIST TEMPLATE');

function makeMovieListTemplate() {
    return `
    <li>
        <a href="https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe">Castle in the Sky (1986)</a>
    </li>
    `;
}

test('movie list template test', assert => {
    const expected = `
    <li>
        <a href="https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe">Castle in the Sky (1986)</a>
    </li>
    `;
    const result = makeMovieListTemplate();
    assert.equal(result, expected);
});