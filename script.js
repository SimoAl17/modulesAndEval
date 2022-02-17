

const fs = require('fs');

fs.readFile('conf.json', (err, data) => {
    if (err){
        console.log(err);
    };
    let json = JSON.parse(data);
    //executeConf(json);
});

console.log('This is after the read call');

function executeConf(jsonArray) {
    for (const element of jsonArray) {
        let array = element.input;
        eval(element.code);
    }
}



const value = 5;

function myLog(variableToLog, someCode) {
    eval(someCode);     //Eval prende del codice come parametro e lo esegue
    console.log(variableToLog);
}

//myLog(value, "variableToLog = 6; console.log('Ti ho fregato');");


function Helper2() {
    function startingUpperCase(string) {
        return string[0].toUpperCase() + string.substring(1); 
    }
    
    function splitCamelCase(string){
        let output = ""
        for (const char of string) {
            if (char === char.toUpperCase()) {
                output += (" " + char.toLowerCase())
            } else {
                output += char;
            }
        }
        return output;
    }
    return {startingUpperCase, splitCamelCase}
}



const MyMath = require("./myMath");
const Helper = require("./caseHelper");
const H2 = Helper2();

console.log(MyMath.sum(3, 4));

console.log(MyMath.pow(3, 2));
console.log(Math.pow(3, 2));
console.log(H2.splitCamelCase("laCasaRosa"));


/*
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });
  */