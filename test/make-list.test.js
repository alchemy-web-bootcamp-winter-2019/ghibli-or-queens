const test = QUnit.test;

QUnit.module('Testing for the list of films function');

function makeListOfFilms(film) {
    const html = /*html*/ `
    <li><a href="">Castle in the Sky</a><span class="year"> (1986)</span></li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
test('make list of films', assert => {
    //Arrange
    const film = {
        title: 'Castle in the Sky',
        released: 1986
    };
    //Act
    const result = makeListOfFilms(film);
    const expected = /*html*/ `
    <li><a href="">Castle in the Sky</a><span class="year"> (1986)</span></li>
    `;
    //Assert
    assert.htmlEqual(result, expected);
});