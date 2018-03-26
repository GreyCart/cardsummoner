#!/usr/local/bin/node

let fs = require('fs');

let table = fs.readFileSync('./docs/cardsummoner.tbl', 'utf8');
table = table.split("\r\n");

let tableObj = {};

for(i=0; i!=table.length; i++) {
	let tmp = table[i];
	tmp = tmp.split('=');
	tableObj[tmp[0]] = tmp[1];
}


let rom = fs.readFileSync('./docs/rom.hex', 'utf8');
rom = rom.split(" ");

let script = '';

for(i=0; i!=rom.length; i++) {
	if(tableObj[rom[i]] == undefined) {
		script += '\n';
	} else {
		script += tableObj[rom[i]];
	}
}

fs.writeFileSync('./docs/script.txt', script);
