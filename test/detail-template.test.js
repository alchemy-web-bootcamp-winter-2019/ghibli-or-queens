import { makeQueenDetail } from '../src/detail-component.js';
const test = QUnit.test;

test('make detail page html', assert => {
    //arrange
    const queen = {
        'id': 1, 'name': 'Victoria \'Porkchop\' Parker', 'winner': false, 'missCongeniality': false, 'image_url':'http://www.nokeynoshade.party/images/victoria-porkchop-parker.jpg', 'quote':'Would you fuck me? I\'d fuck me.', 'seasons':[{ 'seasonNumber':'1', 'id': 1, 'place': 9 }]
    };
    const expected = /*html*/
    `
    <dl>
    <dt>Name:</dt>
    <dd>Victoria 'Porkchop' Parker</dd>
    <dt>Winner:</dt>
    <dd>No</dd>
    <dt>Quote:</dt>
    <dd>Would you fuck me? I'd fuck me.</dd>
    <dt>First Appearance:</dt>
    <dd>Season 1</dd>
    <dt>Picture</dt>
    <dd><img src="http://www.nokeynoshade.party/images/victoria-porkchop-parker.jpg"></dd>
    </dl>`;
    //act
    const queenDetail = makeQueenDetail(queen);
    //assert
    assert.htmlEqual(queenDetail, expected);
});