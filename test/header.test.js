const test = QUnit.test;

QUnit.module('header');

function loadHeader() {
    const template = document.createElement('template');
    template.innerHTML = `
    <h1><a href="header">Studio Ghibli</a></h1>
    `;

    return template.content;
}

test('html template for header', assert => {
    // arrange

    // act
    const result = loadHeader();
    // assert
    assert.htmlEqual(result, `
    <h1><a href="header">Studio Ghibli</a></h1>
    `);
});