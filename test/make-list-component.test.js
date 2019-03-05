const test = QUnit.test;
const template = document.createElement('template');


function makeListItem(filmObject) {
    const html = `<li>${filmObject.title}</li>`;
    template.innerHTML = html;
    return template.content;
}


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