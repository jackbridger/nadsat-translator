const data = require('./model')

module.exports = (partialWord) => {
    let suggetionsArr = [];
    for (let key in data.nadsat) {
        if (key.startsWith(partialWord)) {
            suggetionsArr.push(key);
        }
    }
    return suggetionsArr.slice(0,5);
}