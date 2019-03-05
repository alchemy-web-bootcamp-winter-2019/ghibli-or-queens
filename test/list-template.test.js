const test = QUnit.test;

function makeListTemplate(queen) {
    const html = /*html*/
    `<li><a href="queen-detail.html?id=1">Victoria 'Porkchop' Parker</a><img src="http://www.nokeynoshade.party/images/victoria-porkchop-parker.jpg"></li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;

}
test('make list dynamically', assert => {
    //arrange
    const queen = {
        'id':1, 'name':'Victoria \'Porkchop\' Parker', 'winner':false, 'missCongeniality':false, 'image_url':'http://www.nokeynoshade.party/images/victoria-porkchop-parker.jpg', 'quote':'Would you fuck me? I\'d fuck me.', 'seasons':[{ 'seasonNumber':'1', 'id':1, 'place':9 }]
    };

    const expected = /*html*/
    `<li><a href="queen-detail.html?id=1">Victoria 'Porkchop' Parker</a><img src="http://www.nokeynoshade.party/images/victoria-porkchop-parker.jpg"></li>`;
    //act
    const result = makeListTemplate(queen);
    //assert
    assert.htmlEqual(result, expected);

});