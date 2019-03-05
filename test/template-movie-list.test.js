const test = QUnit.test;

QUnit.module('MOVIE LIST TEMPLATE');



const movie = {
    title: 'Castle in the Sky',
    url: 'https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe',
    release_date: 1986
};

function makeMovieListTemplate(movie) {
    const html = `
    <li>
        <a href="${ movie.url }">${ movie.title } (${ movie.release_date })</a>
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;

}

test('movie list template test', assert => {
    
    const expected = `
    <li>
        <a href="https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe">Castle in the Sky (1986)</a>
    </li>
    `;
    const result = makeMovieListTemplate(movie);
    assert.htmlEqual(result, expected);
});