import { makeHeader } from '../src/header/header-component.js';

const test = QUnit.test;

QUnit.module('make correct header (with link and without link)');

test('make correct header with all films link', assert => {
    const expected = /*html*/
    `<section id="header-section">
        <img src="../../assets/ghibli-logo.png">
        <h1>Films</h1>
        <a href="index.html" id="all-films-link">
        All Films</a>
    </section>`;

    const result = makeHeader(true);

    assert.htmlEqual(result, expected);
});

test('make correct header without all films link', assert => {
    const expected = /*html*/
    `<section id="header-section">
        <img src="../../assets/ghibli-logo.png">
        <h1>Films</h1>
    </section>`;

    const result = makeHeader(false);

    assert.htmlEqual(result, expected);
});