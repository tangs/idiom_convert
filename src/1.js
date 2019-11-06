const fs = require('fs');

const buffer = fs.readFileSync('cfg/explanation.json');
const data = JSON.parse(buffer).datas;
const words = [];
for (const cell of data) {
    if (cell.word.length == 4)
        words.push(cell.word);
}

fs.writeFileSync('cfg/words.json', JSON.stringify(words));