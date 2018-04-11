#!/usr/local/bin/node

let args = process.argv;
let fs = require('fs');

let table = fs.readFileSync(args[3], 'utf8');
table = table.split("\r\n");

let tableObj = {};

for(i=0; i!=table.length; i++) {
	let tmp = table[i];
	tmp = tmp.split('=');
	tableObj[tmp[1]] = tmp[0];
}

let script = fs.readFileSync(args[2], 'utf8');
script = script.split('');

let rom = '';

for(i=0; i!=script.length; i++) {
    rom += tableObj[script[i]];
    rom += " ";
}

fs.writeFileSync(args[4], rom);