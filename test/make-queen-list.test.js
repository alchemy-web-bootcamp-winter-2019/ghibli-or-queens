const test = QUnit.test;
const queens = [
    {
        id: 89,
        queen: 'Trixie Mattel',
        seasons: 3,
        quote: 'I love pickles'
    },
    {
        id: 90,
        queen: 'Naomi Smalls',
        season: 7,
        quote: 'My bark is worse than my bite'
    },
    {
        id: 91,
        queen: 'Milk',
        seasons: 6,
        quote: 'Dumb? Me? No way'
    }
];

function makeQueenList(queens) {
    const html = `
    <ul id="queen-list">
    <li><a href="">Trixie Mattel</a></li>
    <li><a href="">Naomi Smalls</a></li>
    <li><a href="">Milk</a></li>
</ul>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;

}


test('make list of queens using template and interpolation', assert => {

    const expected = `
    <ul id="queen-list">
    <li><a href="">Trixie Mattel</a></li>
    <li><a href="">Naomi Smalls</a></li>
    <li><a href="">Milk</a></li>
</ul>`;

    const result = makeQueenList(queens);

    assert.htmlEqual(result, expected);
});