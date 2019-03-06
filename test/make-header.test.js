import { makeHeader } from '../src/header-component.js';
const test = QUnit.test;

test('make header with link to index.html', assert => {
    const header = /*html*/
    `<section id="header-section">
        <img src="assets/logo.png">
        <h1>Studio Ghibli Films</h1>
        <a id="index-link" href="index.html">Back to All Films</a>
        </section>`;

    const result = makeHeader(true);
    assert.htmlEqual(result, header);
});

test('make header without link to index.html', assert => {
    const header = /*html*/
    `<section id="header-section">
        <img src="assets/logo.png">
        <h1>Studio Ghibli Films</h1>
        </section>`;

    const result = makeHeader(false);
    assert.htmlEqual(result, header);
});