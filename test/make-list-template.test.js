const test = QUnit.test;

QUnit.module('List template');

function makeListTemplate(champion) {
    const template = document.createElement('template');
    template.innerHTML = `
        <li>
            <a href="champion-details.html/?id=${champion.id}">
                <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${champion.id}.png">
                <h2>${champion.name}</h2>
            </a>
        </li>
    `;
    return template.content;
}

test('List template test: Aatrox', assert => {
    // Arrange
    const expected = `
        <li>
            <a href="champion-details.html/?id=Aatrox">
                <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png">
                <h2>Aatrox</h2>
            </a>
        </li>
    `;
    const champion = {
        "id": "Aatrox",
        "name": "Aatrox",
    };
    // Act
    const result = makeListTemplate(champion);

    // Assert
    assert.htmlEqual(result, expected);
});

test('List template test: Cho\'Gath', assert => {
    // Arrange
    const expected = `
        <li>
            <a href="champion-details.html/?id=Chogath">
                <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Chogath.png">
                <h2>Cho'Gath</h2>
            </a>
        </li>
    `;
    const champion = {
        "id": "Chogath",
        "name": "Cho'Gath",
    };
    // Act
    const result = makeListTemplate(champion);

    // Assert
    assert.htmlEqual(result, expected);
});