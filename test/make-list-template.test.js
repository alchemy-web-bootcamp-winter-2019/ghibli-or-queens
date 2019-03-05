const test = QUnit.test;

QUnit.module('List template');

function makeListTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
        <li>
            <a href="champion-details.html/?id=Aatrox">
                <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png">
                <h2>Aatrox</h2>
            </a>
        </li>
    `;
    return template.content;
}

test('List template test', assert => {
    // Arrange
    const expected = `
        <li>
            <a href="champion-details.html/?id=Aatrox">
                <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png">
                <h2>Aatrox</h2>
            </a>
        </li>
    `;

    // Act
    const result = makeListTemplate();

    // Assert
    assert.htmlEqual(result, expected);
});