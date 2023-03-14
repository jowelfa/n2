const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./Content/first.txt', 'utf8')
const second = readFileSync('./Content/Subfolder/second.txt', 'utf8')

writeFileSync('./content/result-sync.txt', 'Here is the result: ' + first + ', ' + second, {flag: 'a'});