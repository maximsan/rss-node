const encode = require("./encode");

const decode = (text, shift) => {
    return encode(text, -shift);
}

module.exports = decode;
