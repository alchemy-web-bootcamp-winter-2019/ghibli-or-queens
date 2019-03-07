const test = QUnit.test;
// second html template test
QUnit.module('movie detail temlate');

import { detailPageTemplate } from '../src/detail-page-template.js';


test('create template for detail page', function(assert) {
    //arrange
    const filmName = {
        "title": "Castle in the Sky",
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        "director": "Hayao Miyazaki",
        "producer": "Isao Takahata",
        "release_date": "1986",
        "rt_score": "95"
    };


    //act
    const result = detailPageTemplate(filmName);
    const expected = /*html*/`
<section id="film-info"> <dl>Name:</dl> <dt>Castle in the Sky</dt> <dl>Description:</dl> <dt>The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.</dt> <dl>Director:</dl> <dt>Hayao Miyazaki</dt> <dl>Release Date:</dl> <dt>1986</dt></section>`;


    //assert

    assert.htmlEqual(result, expected);
});