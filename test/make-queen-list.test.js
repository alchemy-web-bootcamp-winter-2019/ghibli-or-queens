import { makeQueenList } from '../src/queen-list-component.js';
const test = QUnit.test;
const queen = 
    {
        id: 89,
        name: 'Trixie Mattel',
        seasons: 3,
        quote: 'I love pickles'
    };

test('make list of queens using template and interpolation', assert => {
    const expected = `
    <ul>
    <li><a href="queen-detail.html?id=89">Trixie Mattel</a></li>
</ul>`;

    const result = makeQueenList(queen);

    assert.htmlEqual(result, expected);
});