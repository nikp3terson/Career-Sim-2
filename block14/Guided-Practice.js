// functions
let myInstruments = ["Flute", "clarinet", "saxophone", "trumpet", "trombone"] 

    myInstruments.push("tuba")
    myInstruments.push("bassoon")
    myInstruments.splice(2,1)
    myInstruments.unshift("saxophone")

function getFirstInstruments() {
    return myInstruments[0]; 
}

function getLastInstruments() { 
    return myInstruments[myInstruments.length - 1];
}

function getFirstAndLastInstrument() {
    return [getFirstInstruments(myInstruments), getLastInstruments(myInstruments)]
}

function getFirstThreeInstruments() {
    const output = [];
    output.push(myInstruments[0])
    output.push(myInstruments[1])
    output.push(myInstruments[2])
    return output;
}
function getTIintruments() {
    const output = [];
    for (let i = 0; i < myInstruments.length; i++){
        const instrument = myInstruments[i];
        if (myInstruments[0] === "t") {
        output.push(myInstruments);
    }
}
return output;
}


// calls
console.log(myInstruments)
console.log(getFirstInstruments(myInstruments))
console.log(getLastInstruments(myInstruments))
console.log(getFirstAndLastInstrument(myInstruments))
console.log(getFirstThreeInstruments(myInstruments))
console.log(getTIintruments(myInstruments))
console.log(getTIintruments(myInstruments))