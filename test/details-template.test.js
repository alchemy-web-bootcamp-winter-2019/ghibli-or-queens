const test = QUnit.test;

QUnit.module('DETAILS TEMPLATE TEST');

function makeDetailsTemplate(movie) {
    const html = `
        <dl id="dl-movie-description-container">
            <span>
                <dt>Title:</dt>
                <dd>${movie.title}</dd>
            </span>
            <span>
                <dt>Release Date:</dt>
                <dd>${movie.release_date}</dd>
            </span>
            <span>
                <dt>Director:</dt>
                <dd>${movie.director}</dd>
            </span>
            <span>
                <dt>Producer:</dt>
                <dd>${movie.producer}</dd>
            </span>
        </dl>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('cheater build details template function', assert => {
    const movie = {
        title: 'Castle in the Sky',
        release_date: 1986,
        director: 'Hayao Miyazaki',
        producer: 'Isao Takahata'
    };
    
    const expected = `
        <dl id="dl-movie-description-container">
            <span>
                <dt>Title:</dt>
                <dd>Castle in the Sky</dd>
            </span>
            <span>
                <dt>Release Date:</dt>
                <dd>1986</dd>
            </span>
            <span>
                <dt>Director:</dt>
                <dd>Hayao Miyazaki</dd>
            </span>
            <span>
                <dt>Producer:</dt>
                <dd>Isao Takahata</dd>
            </span>
        </dl>
    `;

    const result = makeDetailsTemplate(movie);
    assert.htmlEqual(result, expected);
});