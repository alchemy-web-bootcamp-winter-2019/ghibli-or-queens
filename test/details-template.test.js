import { makeDetailsTemplate } from '../src/details-component.js';

const test = QUnit.test;

QUnit.module('DETAILS TEMPLATE TEST');

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