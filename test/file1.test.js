const test = QUnit.test;

QUnit.module('make html template literal');


import makeTemplateHtml from '../src/make-template-html.js';

const filmName = {
    "name": "Castle in the Sky",
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe"
};

test('make a dynamic html list', function(assert) {
    //arrange
    const json = { 'title': 'Castle in the Sky' };

      //act
    const result = makeTemplateHtml(filmName);
    const expected = /*HTML*/` <li id="film"><a href="./description-page.html?id=2baf70d1-42bb-4437-b551-e5fed5a87abe">Castle in the Sky</a></li>`;


    //assert


    assert.htmlEqual(result, expected);
});