##  Caesar cipher CLI tool

This is an encryption cli-tool used [Сaesar cipher](https://www.wikiwand.com/en/Caesar_cipher) as a basis.

### How to start

1)  clone repository
2)  cd rss-node folder
3)  cd caesar-cipher-cli folder
4)  install dependencies via **npm install** or **yarn**

### How to use

#### cli-ool can accept 4 options/flags (short alias or full name):

- -s, --shift: a shift (*required param*)
- -i, --input: an input file (*required param*)
- -o, --output: an output file
- -a, --action: an action encode/decode

##### how to run cli-tool:

- node index.js -a encode -s 3 -i "./input.txt" -o "./output.txt"

##### examples:

* $ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"

* $ node my_caesar_cli -a decode -s 7 -i "./input.txt" -o "./output.txt"

* $ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt

* $ node my_caesar_cli --action decode --shift 7 --input decoded.txt --output plain.txt
