let fs = require('fs');
let hexFile = fs.readFileSync('./docs/rom.hex', 'utf8');
let hexArr = hexFile.split(' ');

let c = document.getElementById('canvas');  // Init the canvas
let ctx = c.getContext('2d');
c.width = 720;
c.height = 720;

let currentAddr = 0x1b2100;
let currentIndx = 1777920;

let addr = document.getElementById('addr');
addr.innerText = currentAddr.toString(16);

let bg0 = ['white', 'yellow', 'blue', 'black'];
let greyscale = ["#FFFFFF", "#999999", "#555555", "#000000"];

let palette = bg0;

function changeAddr(flag) {
    if(flag) {
        if(currentAddr != 0x200000) {
            currentAddr += 0x10;
            currentIndx += 16;
        }
    } else {
        if(currentAddr != 0x0) {
            currentAddr -= 0x10;
            currentIndx -= 16;
        }
    }

    addr.innerText = currentAddr.toString(16);

    processSprite();
}

function getBinaryFromHex(hex) {
    if(hex == "0") {
        return ["0", "0", "0", "0"];
    }else if(hex == "1") {
        return ["0", "0", "0", "1"];
    }else if(hex == "2") {
        return ["0", "0", "1", "0"];
    }else if(hex == "3") {
        return ["0", "0", "1", "1"];
    }else if(hex == "4") {
        return ["0", "1", "0", "0"];
    }else if(hex == "5") {
        return ["0", "1", "0", "1"];
    }else if(hex == "6") {
        return ["0", "1", "1", "0"];
    }else if(hex == "7") {
        return ["0", "1", "1", "1"];
    }else if(hex == "8") {
        return ["1", "0", "0", "0"];
    }else if(hex == "9") {
        return ["1", "0", "0", "1"];
    }else if(hex == "A") {
        return ["1", "0", "1", "0"];
    }else if(hex == "B") {
        return ["1", "0", "1", "1"];
    }else if(hex == "C") {
        return ["1", "1", "0", "0"];
    }else if(hex == "D") {
        return ["1", "1", "0", "1"];
    }else if(hex == "E") {
        return ["1", "1", "1", "0"];
    }else if(hex == "F") {
        return ["1", "1", "1", "1"];
    }
}

function pushBytes(inArr, outArr) {
    for(i=0; i!=inArr.length; i++) {
        outArr.push(inArr[i]);
    }
}

function drawPixel(x, y, c) {
    ctx.fillStyle = palette[c];
    ctx.fillRect(x*90, y*90, 90, 90);
}

function processSprite() {
    let i = 0;

    while(i != 16) {
        let loByte = hexArr[currentIndx+i];
        let hiByte = hexArr[currentIndx+i+1];

        let byteArrLo = loByte.split('');
        let byteArrHi = hiByte.split('');
        let binArrLo = [];
        let binArrHi = [];

        let tmpArr = [];

        tmpArr = getBinaryFromHex(byteArrLo[0]);
        pushBytes(tmpArr, binArrLo);
        tmpArr = getBinaryFromHex(byteArrLo[1]);
        pushBytes(tmpArr, binArrLo);
        tmpArr = getBinaryFromHex(byteArrHi[0]);
        pushBytes(tmpArr, binArrHi);
        tmpArr = getBinaryFromHex(byteArrHi[1]);
        pushBytes(tmpArr, binArrHi);

        let j = 0;

        while(j != 8) {
            let twoBit = binArrHi[j] + binArrLo[j];
            twoBit = parseInt(twoBit, 2);
            drawPixel(j, i/2, twoBit);
            j++;
        }

        i += 2;
    }
    console.log(currentIndx);
}

processSprite();
