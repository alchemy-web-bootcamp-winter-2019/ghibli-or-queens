const test = QUnit.test;

function makeQueenDetail(queen) {
    const html = /*html*/
    `
    <dl>
    <dt>Name:</dt>
    <dd>Victoria 'Porkchop' Parker</dd>
    <dt>Winner:</dt>
    <dd>No</dd>
    <dt>Quote:</dt>
    <dd>Would you fuck me? I'd fuck me.</dd>
    <dt>Season:</dt>
    <dd>1</dd>
    <dt>Picture</dt>
    <dd><img src="http://www.nokeynoshade.party/images/victoria-porkchop-parker.jpg"></dd>
    </dl>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

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
    <dt>Season:</dt>
    <dd>1</dd>
    <dt>Picture</dt>
    <dd><img src="http://www.nokeynoshade.party/images/victoria-porkchop-parker.jpg"></dd>
    </dl>`;
    //act
    const queenDetail = makeQueenDetail(queen);
    //assert
    assert.htmlEqual(queenDetail, expected);
});