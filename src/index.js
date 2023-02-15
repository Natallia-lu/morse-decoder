const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let size = 10
    let i = 0
    let count = expr.length / size
    let str = ''
     let cod = ''

    for (i; i < count; i++) {   
        let decod = ''
        str = expr.substr(i*size, size)
        for (let j = 0; j < 10; j = j + 2) {
            if (str.substr(j, 2) === '10') {
                decod = decod + '.'
            } else if (str.substr(j, 2) === '11') {
                decod = decod + '-'
            } else if (str.substr(j, 2) === '*') {
                decod = decod + ' '
            } else if (str.substr(j, 2) === '00') {
                decod = decod
            }
        }
        if (MORSE_TABLE[decod] === undefined) {
            cod = cod + ' '
        }else {
            cod = cod + MORSE_TABLE[decod]
        }
    }
    return cod
}

module.exports = {
    decode
}