const resolvePath = require("../utils/resolvePath");
const {createWriteStream, existsSync} = require('fs')

const getWriteStream = (output) => {
    let writeStream;
    if (output) {
        const outputPath = resolvePath(output);

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
