const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const regexCPF = /\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}/g

const matchCPF = banco.match(regexCPF)
console.log(matchCPF);

