const fs = require('fs');

const buffer = fs.readFileSync('cfg/IdiomConfig.json');
const data = JSON.parse(buffer);
const dest = [];

const len = data.length;
for (let i = 0; i < len; ++i) {
    const cell = data[i];
    const id = cell.id;
    delete cell.id;
    delete cell.levelup;
    delete cell.wifenum;
    dest.push({
        id: id,
        data: cell
    });
}

fs.writeFileSync('cfg/IdiomConfig1.json', JSON.stringify(dest));
