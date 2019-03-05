import { createListItem } from '../src/list-component.js';

const test = QUnit.test;

QUnit.module('List component');

test('create list item', function(assert) {
    // arrange
    const expected = /*html*/`
        <li>
            <img src="http://www.nokeynoshade.party/images/victoria-porkchop-parker.jpg" alt="Image of Victoria 'Porkchop' Parker">
            <a href="queen-detail.html?id=1">Victoria 'Porkchop' Parker</a>            
        </li>
    `;
    const queen = {
        'id': 1,
        'name': 'Victoria \'Porkchop\' Parker',
        'winner': false,
        'missCongeniality': false,
        'image_url': 'http://www.nokeynoshade.party/images/victoria-porkchop-parker.jpg',
        'quote': 'Would you fuck me? I\'d fuck me.'
    };
    // act
    const result = createListItem(queen);
    // assert
    assert.htmlEqual(result, expected);
});