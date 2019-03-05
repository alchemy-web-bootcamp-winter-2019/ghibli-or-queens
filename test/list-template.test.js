const test = QUnit.test;

const movie = {
    title: 'Castle in the Sky',
    url: "google.com",
    release_date: 1986
};

function createList(movie) {
    const html = `
    <span>
        <li>
        <a href=${movie.url}>${movie.title} (${movie.release_date})</a>
        </li>
    </span>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

test('generate list dynamically', assert => {
    //arrange
    const expected = `
    <span>
        <li>
            <a href="google.com">Castle in the Sky (1986)</a>
        </li>
    </span>
    `;

    //act
    const result = createList(movie);

    //assert
    assert.htmlEqual(result, expected);
});