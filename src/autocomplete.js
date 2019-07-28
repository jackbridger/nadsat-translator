const data = require('./model')

module.exports = (partialWord) => {
    let suggetionsArr = [];
    for (let key in data.nadsat) {
        if (key.includes(partialWord)) {
            suggetionsArr.push(key);
        }
    }
    return suggetionsArr;
}