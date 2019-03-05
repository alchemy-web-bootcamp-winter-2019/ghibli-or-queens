import { makeQueenItem } from '../src/queen-list-component.js';
const test = QUnit.test;

QUnit.module('Generation of Queen List Items');

const testQueen = {
   id: 42,
   name: 'Jiggly Caliente',
   quote: 'Jiggly is New York\'s plus size barbie, she\'s got swerve for your nerve, you can\'t take her!',
   winner: false,
   episodes: [1, 2, 3, 4, 5, 6, 7],
};


test('Create template for List Item', assert => {
   const expected = `<li><a href="queen-details.html?id=42">Jiggly Caliente</a></li>`;
   const result = makeQueenItem(testQueen);
   assert.htmlEqual(result, expected);
});
