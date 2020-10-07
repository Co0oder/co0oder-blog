const fs = require('fs');
const indexFile = fs.readFileSync(`${__dirname}/../../build/index.html`);

module.exports = (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send(indexFile);
};