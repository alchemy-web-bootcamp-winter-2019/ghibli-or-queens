import { createDetail } from '../src/createDetail.js';
const test = QUnit.test;

const movie = {
    title: 'Castle in the Sky',
    release_date: 1986 
};


test('create detail page dynamically', assert => {
//arrange
    const expected = `
    <dl>
    <span>
        <dt>Title:</dt>          
        <dd>Castle in the Sky</dd>
    </span>

    <span>
        <dt>Year Released:</dt>
        <dd>1986</dd>
    </span>
    </dl>
    `;

//act
    const result = createDetail(movie);

//assert
    assert.htmlEqual(result, expected);
});