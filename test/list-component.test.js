const test = QUnit.test;

QUnit.module('List component');

function createListItem() {
    const html = /*html*/`
        <li>
            <img src="http://www.nokeynoshade.party/images/victoria-porkchop-parker.jpg" alt="Image of Victoria 'Porkchop' Parker">
            <a href="queen-detail.html?id=1">Victoria 'Porkchop' Parker</a>            
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('create list item', function(assert) {
    // arrange
    const expected = /*html*/`
        <li>
            <img src="http://www.nokeynoshade.party/images/victoria-porkchop-parker.jpg" alt="Image of Victoria 'Porkchop' Parker">
            <a href="queen-detail.html?id=1">Victoria 'Porkchop' Parker</a>            
        </li>
    `;
    // act
    const result = createListItem();
    // assert
    assert.htmlEqual(result, expected);
});