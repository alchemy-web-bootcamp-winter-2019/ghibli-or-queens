import loadHeader from '../src/load-header.js';
const test = QUnit.test;

QUnit.module('make loadHeader function');

test('loadHeader returns header HTML content', assert => {
    const expected = '<a href="./index.html"><h1>Ghibili Films</h1></a>';

    const result = loadHeader();

    assert.htmlEqual(result, expected);
});