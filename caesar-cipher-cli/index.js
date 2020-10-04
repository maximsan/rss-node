const getReadStream = require("./getReadStream");
const getWriteStream = require("./getWriteStream");
const caesarCipher = require("./caesarCipherStream");
const {processArgs, actions} = require("./processArgs");
const {promisify} = require('util')
const stream = require("stream");
const pipeline = promisify(stream.pipeline);

const {action, shift, input, output} = processArgs();

const readStream = getReadStream(input);
const writeStream = getWriteStream(output);
const caesarCipherStream = new caesarCipher({action, shift});

const act = action === actions.encode ? 'encod' : action === actions.decode ? 'decod' : '';

async function runStreaming() {
    await pipeline(
        readStream,
        caesarCipherStream,
        writeStream
    )
    console.log(`Data was successfully ${act}ed`);
}

runStreaming().catch(error => {
    console.error(`Data ${act}ing is failed`);
    console.error(error.message);
});

