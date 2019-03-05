import { createList } from '../src/createList.js';
const test = QUnit.test;

const movie = {
    title: 'Castle in the Sky',
    url: "google.com",
    release_date: 1986
};


test('generate list dynamically', assert => {
    //arrange
    const expected = `
    <span>
        <li>
            <a href="google.com">Castle in the Sky (1986)</a>
        </li>
    </span>
    `;

    //act
    const result = createList(movie);

    //assert
    assert.htmlEqual(result, expected);
});