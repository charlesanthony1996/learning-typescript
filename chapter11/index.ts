import { Data } from "./types/data"
// import  globallyDeclared  from './types/data'

function logData(data: Data) {
    console.log(`Data version: ${data.version}`)
}

var data_var: Data = {  
    version: "hello"
}

data_var.version = "3.4"

console.log(data_var)
// logData(globallyDeclared)

// cannot find locallyDeclared here
// so it gives an error
// logData(locallyDeclared)


// library declarations

// example a file like -> lib.es5.d.ts

interface Array<T> {
    length: number
}

