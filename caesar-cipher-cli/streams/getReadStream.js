const resolvePath = require("../utils/resolvePath");
const {createReadStream, existsSync} = require('fs')

const getReadStream = (input) => {
    let readStream;
    if (input) {
        const inputPath = resolvePath(input);

        if (existsSync(inputPath)) {
            readStream = createReadStream(inputPath, {encoding: 'utf-8'});
        } else {
            console.error(`The input file ${input} does not exist`);
            process.exit(9);
        }

    } else {
        readStream = process.stdin;
    }

    return readStream;
}

module.exports = getReadStream;
