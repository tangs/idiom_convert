const fs = require('fs');

const buffer = fs.readFileSync('cfg/IdiomConfig.json');
const data = JSON.parse(buffer);
// const words = [];

const map = {};
let len = data.length;
const levels = [];
const allIdioms = [];
for (let i = 0; i < len; ++i) {
    const idioms = [];
    // levels[i] = {
    //     level: i,
    //     idioms: idioms,
    // }
    for (const word of data[i].idiom) {
        if (map[word] == null) {
            map[word] = i;
            idioms.push(word);
            allIdioms.push(word);
        }
    }
    if (idioms.length > 0) {
        levels.push({
            level: i,
            idioms: idioms,
        });
    }
}
const dest = {
    datas: allIdioms,
    levels: levels,
}

fs.writeFileSync('cfg/LevelIdioms.json', JSON.stringify(dest));