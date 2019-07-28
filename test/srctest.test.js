// testing the backend
const autocomplete = require('../src/autocomplete');
const test = require('tape');

test('test if autcomplete returns an array', (t) => {
    let actual = typeof autocomplete('me');
    let expected = typeof [];
    t.equal(actual, expected);
    t.end();
})

test('test if autcomplete returns correct array for single match', (t) => {
    let actual = autocomplete('me');
    let expected = ["men"];
    t.deepEqual(actual, expected);
    t.end();
})

test('test if autcomplete returns correct array for multiple matches', (t) => {
    let actual = autocomplete("ba");
    let expected = ["bad","band", "battle", "bastard"];
    t.deepEqual(actual, expected);
    t.end();
})

test('test if autcomplete returns max of 5 results', (t) => {
    let actual = autocomplete("b");
    let expected = [ 'bad', 'band', 'bed', 'battle', 'big'];
    t.deepEqual(actual, expected);
    t.end();
})