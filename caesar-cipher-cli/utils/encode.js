const {isLatinAlphabetLetter, fromCharCode, getShiftedLetter} = require("./helpers");

const encode = (text, shift) => {
    return Array.from(text).reduce((transformedStr, value, index) => {
        const charCode = text.charCodeAt(index);
        if (isLatinAlphabetLetter(charCode)) {
            const shiftedCharCode = getShiftedLetter(charCode, shift);
            transformedStr += fromCharCode(shiftedCharCode);
        } else {
            transformedStr += fromCharCode(charCode);
        }

        return transformedStr;
    }, '')
}

module.exports = encode;
