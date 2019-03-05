const test = QUnit.test;

QUnit.module('queen list');

import makeListTemplate from '../src/queen-list.js';

test('does the hardcoded html match the dynamically generated html', assert => {
    //arrange
    const queen = {
        id: '89',
        name: 'Trixie Mattel',
        quote: 'Okay, calm down there public school.',
        image_url: 'https://pbs.twimg.com/profile_images/969470926235492352/afGetjal_400x400.jpg',
        seasons: [
            {
               "id": 8,
               "place": 6
             },
            ]
    }

    //act
    const results = makeListTemplate(queen);

    //assert
    assert.htmlEqual(results, `
        <a href="./queen-detail.html?id=89">
            <li id="queen-container">
                <img src="https://pbs.twimg.com/profile_images/969470926235492352/afGetjal_400x400.jpg">
                <h3 class="nametag">Trixie Mattel</h3>
            </li>
        </a>
        `); 
        
})