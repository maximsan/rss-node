const {resolve} = require('path')
const {createReadStream, existsSync} = require('fs')

const getReadStream = (input) => {
    let readStream;
    if (input) {
        const inputPath = resolve(__dirname, input);

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
