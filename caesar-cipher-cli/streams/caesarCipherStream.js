const {actions} = require("../utils/processArgs");

const encode = require("../utils/encode");
const decode = require("../utils/decode");
const {Transform} = require('stream');

class CaesarCipherStream extends Transform {
    #action;
    #shift;

    constructor(props) {
        super(props);
        const {action, shift} = props;
        this.#action = action;
        this.#shift = shift;
    }

    _transform(chunk, encoding, callback) {
        try {
            const text = chunk.toString();
            let transformedStr = '';

            if (this.#action === actions.encode) {
                transformedStr = encode(text, this.#shift);
            }
            if (this.#action === actions.decode) {
                transformedStr = decode(text, this.#shift);
            }

            callback(null, transformedStr);
        } catch (error) {
            callback(error);
        }
    }
}


module.exports = CaesarCipherStream;
