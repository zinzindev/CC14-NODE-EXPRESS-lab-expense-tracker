const fs = require('fs/promises');

const readFile = (filename) => fs.readFile(filename, 'utf8').then(JSON.parse);
const writeFile = (filename, data) => fs.writeFile(filename, JSON.stringify(data), 'utf8');

exports.readCategory = () => readFile('src/dbs/category.json');
exports.writeCategory = (data) => writeFile('src/dbs/category.json', data);
exports.readTransaction = () => readFile('src/dbs/transaction.json');
exports.writeTransaction = (data) => writeFile('src/dbs/transaction.json', data);
