const {createWriteStream, existsSync} = require('fs')
const {join} = require('path')

const getWriteStream = (output) => {
    let writeStream;
    if (output) {
        const outputPath = join(__dirname, output);

        if (existsSync(outputPath)) {
            writeStream = createWriteStream(outputPath, {encoding: 'utf-8', flags: 'a'});
        } else {
            console.error(`The output file ${output} does not exist`);
            process.exit(9);
        }

    } else {
        writeStream = process.stdout;
    }
    return writeStream;
}

module.exports = getWriteStream;
