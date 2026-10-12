// erased structual types

type nameprop1 = {
    prop1: string
}

function log(x: nameprop1) {
    console.log(x.prop1)
}

const obj = {
    prop1: "origin",
    prop2: 123
}

// this takes in an object
// returns its propx value
log(obj)