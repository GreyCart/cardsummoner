#!/usr/local/bin/node

let fs = require('fs');
let alpha = fs.readFileSync('alphabet.hex', 'utf8');
let args = process.argv;

alpha = alpha.split('');

function printLetter(chara) {
    for(i=chara; i<chara+32; i++) {
        process.stdout.write(alpha[i]);
    }
    process.stdout.write('\n');
}

if(args.length != 3) {
    console.log('ERROR! This script requires exactly ONE argument.');
    process.exit();
}

switch(args[2]) {
    case 'a':
        printLetter(0);
        break;
    case 'b':
        printLetter(1);
        break;
    case 'c':
        printLetter(2);
        break;
    case 'd':
        printLetter(3);
        break;
    case 'e':
        printLetter(4);
        break;
    case 'f':
        printLetter(5);
        break;
    case 'g':
        printLetter(6);
        break;
    case 'h':
        printLetter(7);
        break;
    case 'i':
        printLetter(8);
        break;
    case 'j':
        printLetter(9);
        break;
    case 'k':
        printLetter(10);
        break;
    case 'l':
        printLetter(11);
        break;
    case 'm':
        printLetter(12);
        break;
    case 'n':
        printLetter(13);
        break;
    case 'o':
        printLetter(14);
        break;
    case 'p':
        printLetter(15);
        break;
    case 'q':
        printLetter(16);
        break;
    case 'r':
        printLetter(17);
        break;
    case 's':
        printLetter(18);
        break;
    case 't':
        printLetter(19);
        break;
    case 'u':
        printLetter(20);
        break;
    case 'v':
        printLetter(21);
        break;
    case 'w':
        printLetter(22);
        break;
    case 'x':
        printLetter(23);
        break;
    case 'y':
        printLetter(24);
        break;
    case 'z':
        printLetter(25);
        break;
    default:
        console.log("ERROR! Enter a single lower-case letter as your argument");
        process.exit();
}