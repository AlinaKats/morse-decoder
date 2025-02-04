const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arrFromString = expr.match(/.{10}/g);

    //delete extra *00* from string;
    const deletedZero = arrFromString.map(char => char.replace(/00/g, ''));

    //replace 10 and 11 to morse code string;
    let morseCode = [];
    for (let key of deletedZero) {
        let symbol = key.replace(/10/g, '.').replace(/11/g, '-');
        morseCode.push(symbol);
    }
    
    /*= deletedZero.join('').replace(/10/g, '.').replace(/11/g, '-').split(',');
    console.log(morseCode);*/

    //decode of array
    let result = [];
    for (let i = 0; i < morseCode.length; i++) {
        console.log(morseCode[i]);
        for (let k = 0; k < Object.keys(MORSE_TABLE).length; k++) {
            if (morseCode[i] === Object.keys(MORSE_TABLE)[k]) {
                result.push(Object.values(MORSE_TABLE)[k]);
            }
        }
        if (morseCode[i] === '**********') {
            result.push(' ');
        }
    }

    return result.join('');
}

module.exports = {
    decode
}

