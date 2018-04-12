let idArr = document.querySelectorAll('*[id]');
let htmlID = {};

for(i=0; i!=idArr.length; i++) {
    htmlID[idArr[i].id] = idArr[i];
}

let paletteList = htmlID.paletteList;
let palette;

function setPalette() {
	palette = palettes[paletteList.value]
}

let keys = Object.keys(htmlID);

for(i=0; i!=keys.length; i++) {
    htmlID[keys[i]].style.backgroundColor = palette[0];
}

function togglePixel(id) {
    id = id.toString();

    let c = htmlID[id].style.backgroundColor;

    if(c == palette[0]) {
        c = palette[1];
    } else if(c == palette[1]) {
        c = palette[2];
    } else if(c == palette[2]) {
        c = palette[3];
    } else if (c == palette[3]) {
        c = palette[0];
    }

    htmlID[id].style.backgroundColor = c;
}

let hexLookup = {
    '0000': '0',
    '0001': '1',
    '0010': '2',
    '0011': '3',
    '0100': '4',
    '0101': '5',
    '0110': '6',
    '0111': '7',
    '1000': '8',
    '1001': '9',
    '1010': 'a',
    '1011': 'b',
    '1100': 'c',
    '1101': 'd',
    '1110': 'e',
    '1111': 'f',
    
}

function analyze() {
    let hiByte = [];
    let loByte = [];

    for(i=0; i!=keys.length; i++) {
        let c = htmlID[keys[i]].style.backgroundColor;
        
        if(c == palette[0]) {
            hiByte.push(0);
            loByte.push(0);
        } else if(c == palette[1]) {
            hiByte.push(0);
            loByte.push(1)
        } else if(c == palette[2]) {
            hiByte.push(1);
            loByte.push(0);
        } else if(c == palette[3]) {
            hiByte.push(1);
            loByte.push(1);
        }
    }

    let byteObj = {};
    let boi = 0;        // Byte object index

    for(i=0; i<hiByte.length; i+=8) {
        byteObj[boi] = '';
        byteObj[boi+1] = '';

        for(n=0+i; n!=8+i; n++) {
            byteObj[boi] += loByte[n];
            byteObj[boi+1] += hiByte[n];
        }

        boi += 2;
    }

    htmlID.codeBox.value = '';

    for(i=0; i!=16; i++) {
        htmlID.codeBox.value += hexLookup[byteObj[i].substring(0,4)];
        htmlID.codeBox.value += hexLookup[byteObj[i].substring(4,8)];
        htmlID.codeBox.value += ' ';
    }
}