// testing the backend
const autocomplete = require('../src/autocomplete');
const test = require('tape');

test('test if autcomplete returns an array', (t) => {
    let actual = typeof autocomplete('me');
    let expected = typeof [];
    t.equal(actual, expected);
    t.end();
})

test('test if autcomplete returns correct array', (t) => {
    let actual = autocomplete('me');
    let expected = ["men"];
    t.deepEqual(actual, expected);
    t.end();
})
