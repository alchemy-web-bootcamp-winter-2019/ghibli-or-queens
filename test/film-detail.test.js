import { createTable } from '../src/film-detal-component.js';
const test = QUnit.test;


test('test table maker', assert => {
    //assign
    const expected = `
    <dl>
    <dt>Title:</dt>
    <dd>Banana</dd>
    <dt>Producer:</dt>
    <dd>Adam</dd>
    <dt>Description:</dt>
    <dd>hello dd=\"\"</dd></dl>
    `;
   
    const movieObject = {
        title: 'Banana',
        producer: 'Adam',
        description: 'hello'
    };
    //act
    const actual = createTable(movieObject);
    //assert
    assert.htmlEqual(actual, expected);
});