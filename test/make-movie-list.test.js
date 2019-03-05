import { makeMovieList } from '../src/movie-list-component.js';
const test = QUnit.test;
const movie = 
    {
        id: 89,
        title: 'Castle in the Sky',
        director: 'Hayao Miyazaki',
        description: 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa\'s science to make himself ruler of the world.'
    };

test('make list of movies using template and interpolation', assert => {
    const expected = `
    <ul>
    <li><a href="movie-detail.html?id=89">Castle in the Sky</a></li>
</ul>`;

    const result = makeMovieList(movie);

    assert.htmlEqual(result, expected);
});