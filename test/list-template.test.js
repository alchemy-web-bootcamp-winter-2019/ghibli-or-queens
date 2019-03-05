import { createList } from '../src/createList.js';
const test = QUnit.test;

const movie = {
    title: 'Castle in the Sky',
    id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
    release_date: 1986
};


test('generate list dynamically', assert => {
    //arrange
    const expected = `
    <span>
        <li>
            <a href="../details.html?id=2baf70d1-42bb-4437-b551-e5fed5a87abe">Castle in the Sky (1986)</a>
        </li>
    </span>
    `;

    //act
    const result = createList(movie);

    //assert
    assert.htmlEqual(result, expected);
});