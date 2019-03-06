const test = QUnit.test;

function makeHeader() {
    const html = /*html*/
    `<section id="header-section">
        <img src="assets/logo.png">
        <h1>Studio Ghibli Films</h1>
        <a id="index-link" href="index.html">Back to All Films</a>
        </section>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
test('make header with link to index.html', assert => {
    const header = /*html*/
    `<section id="header-section">
        <img src="assets/logo.png">
        <h1>Studio Ghibli Films</h1>
        <a id="index-link" href="index.html">Back to All Films</a>
        </section>`;

    const result = makeHeader(true);
    assert.htmlEqual(result, header);
});