const test = QUnit.test;
import headerTemplate from '../src/header.js';

QUnit.module('header');


test('html template for header', assert => {
    // arrange

    // act
    const result = headerTemplate();
    // assert
    assert.htmlEqual(result, `
    <h1><a href="index.html">Studio Ghibli</a></h1>
    `);
});