import { makeQueenTable } from '../src/queen-detail-component.js';
const test = QUnit.test;

const queen = 
    {
        id: 89,
        name: 'Trixie Mattel',
        seasons: 3,
        quote: 'I love pickles'
    };

test('make queen detail table from template', assert => {
    const expected = `
    <dl>
    <dt>Name:</dt>
    <dd>Trixie Mattel</dd>
    <dt>Seasons:</dt>
    <dd>3</dd>
    <dt>Quote:</dt>
    <dd>"I love pickles"</dd>
</dl>`;

    const result = makeQueenTable(queen);

    assert.htmlEqual(result, expected);
});