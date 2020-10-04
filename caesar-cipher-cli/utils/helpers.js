const downBoundaryHighRegisterLetter = 65;
const upBoundaryHighRegisterLetter = 90;
const downBoundaryLowRegisterLetter = 97;
const upBoundaryLowRegisterLetter = 122;

const isHighRegisterLetter = (letter) => {
    return letter >= downBoundaryHighRegisterLetter && letter <= upBoundaryHighRegisterLetter;
}

const isLowRegisterLetter = (letter) => {
    return letter >= downBoundaryLowRegisterLetter && letter <= upBoundaryLowRegisterLetter;
}

const isLatinAlphabetLetter = (letter) => {
    return isHighRegisterLetter(letter) || isLowRegisterLetter(letter);
}

const fromCharCode = (charCode) => {
    return String.fromCharCode(charCode);
}

const getShiftedLetterCharCode = (letter, shift) => {
    return letter + shift;
}

const doShift = (letter, shift, upBoundary, lowBoundary) => {
    const latinAlphabet = upBoundary - lowBoundary + 1;
    const realShift = (latinAlphabet % shift) === latinAlphabet ? 0 : shift;
    let shiftedCharCode = getShiftedLetterCharCode(letter, realShift);

    if (shiftedCharCode > upBoundary) {
        let diff = upBoundary - shiftedCharCode;
        if (diff < 0) {
            shiftedCharCode = lowBoundary - diff - 1;
        } else {
            shiftedCharCode = lowBoundary + diff;
        }
    }
    if (shiftedCharCode < lowBoundary) {
        let diff = lowBoundary - shiftedCharCode;
        if (diff > 0) {
            shiftedCharCode = upBoundary - diff + 1;
        } else {
            shiftedCharCode = upBoundary - diff;
        }
    }

    return shiftedCharCode;
}

const getShiftedLetter = (letter, shift) => {
    let shiftedCharCode;

    if (isHighRegisterLetter(letter)) {
        shiftedCharCode = doShift(letter, shift, upBoundaryHighRegisterLetter, downBoundaryHighRegisterLetter);
    }
    if (isLowRegisterLetter(letter)) {
        shiftedCharCode = doShift(letter, shift, upBoundaryLowRegisterLetter, downBoundaryLowRegisterLetter);
    }

    return shiftedCharCode;
}

module.exports = {
    isHighRegisterLetter,
    isLatinAlphabetLetter,
    isLowRegisterLetter,
    fromCharCode,
    getShiftedLetter
}
