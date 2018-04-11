# Script Dumper

## Convert rom hex file to plain text

```node toScript.js rom.hex table.tbl script.txt```

## Convert plain text file back to rom

```node toRom.js script.txt table.tbl rom.hex```

## Usage

```rom.hex``` is the contents of a ROM file that has been pasted into a plain text file.
See: docs/rom.hex

```table.tbl``` is a plain text file that holds definitions for all possible bytes (0x00 - 0xFF)
See: docs/brent.tbl

```script.txt``` is a plain text file that holds the hex values from rom.hex converted from table.tbl
See: docs/script-using-ff-table.txt