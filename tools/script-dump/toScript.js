#!/usr/local/bin/node

let args = process.argv;
let fs = require('fs');

let table = fs.readFileSync(args[3], 'utf8');
table = table.split("\r\n");

let tableObj = {};

for(i=0; i!=table.length; i++) {
	let tmp = table[i];
	tmp = tmp.split('=');
	tableObj[tmp[0]] = tmp[1];
}


let rom = fs.readFileSync(args[2], 'utf8');
rom = rom.split(" ");

let script = '';

for(i=0; i!=rom.length; i++) {
		script += tableObj[rom[i]];
}

fs.writeFileSync(args[4], script);
