import { makeListItem } from '../src/make-list-component.js';

const test = QUnit.test;

test('test make-list-component.test.js', assert => {


    //assign

    const filmObject = { 'title': 'film1' };
    const expected = `
    <li>film1</li>
    `;
    //act/
    const actual = makeListItem(filmObject);
    //assert

    assert.htmlEqual(actual, expected);

});