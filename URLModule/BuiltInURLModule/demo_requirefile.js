const url = require('url');
const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
const q = url.parse(adr, true);

console.log(q.host); //'localhost:8080'を返す
console.log(q.pathname); //'default.htm'を返す
console.log(q.search);//'?year=2017&month=february'を返す

const qdata = q.query; //object: { year: 2017, month: 'february' }を返す
console.log(qdata.month); //returns 'february'