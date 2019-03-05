import { makeQueenTable } from '../src/queen-detail/table-component.js';

const test = QUnit.test;

QUnit.module('Table component');

test('make table', function(assert) {
    // arrange
    const queen = {
        'id': 1,
        'name': 'Victoria \'Porkchop\' Parker',
        'winner': false,
        'missCongeniality': false,
        'image_url': 'http://www.nokeynoshade.party/images/victoria-porkchop-parker.jpg',
        'quote': 'Would you fuck me? I\'d fuck me.'
    };
    const expected = /*html*/`
        <dl>
            <dt>Name:</dt>
            <dd>Victoria 'Porkchop' Parker</dd>
            <dt>Winner:</dt>
            <dd>No</dd>
            <dt>Miss Congeniality:</dt>
            <dd>No</dd>
            <dt>Quote:</dt>
            <dd>Would you fuck me? I'd fuck me.</dd>
        </dl>
    `;
    // act
    const result = makeQueenTable(queen);
    // assert
    assert.htmlEqual(result, expected);
});