import { makeListItem } from '../src/make-list-component.js';

const test = QUnit.test;

test('test make-list-component.test.js', assert => {


    //assign

    const filmObject = {
        'title': 'film1',
        'id': '1'
    };
    const expected = `
    <li><a href="film-detail.html?id=1>film1</a> </li>
    `;
    //act/
    const actual = makeListItem(filmObject);
    //assert

    assert.htmlEqual(actual, expected);

});