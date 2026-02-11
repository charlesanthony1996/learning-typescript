// any type

let anyvalue: any
anyvalue = "lucille ball"
anyvalue = 123

// console.log(anyvalue)
// console.log("hello")


function greetComedian(name: any) {
    console.log(`Announcing ${name.toUpperCase()}`)
}

// greetComedian({ name: "Charles Anthony"})

// greetComedian("charles anthony")

// unknown type

function greetComedian1(name: unknown) {
    console.log()
}

function greetComedianSafety(name: unknown) {
    if (typeof name === "string") {
        console.log(`Announcing ${name.toUpperCase()}`)
    } else {
        console.log("well im off")
    }
}

// greetComedianSafety("Betty white")

// greetComedianSafety({})

// type predicates

function isNumberorstring(value: unknown)  {
    return ['number','string'].includes(typeof value), typeof value
    // console.log(['number', 'string'].includes(typeof value))
}

function isnumberorstring1(value: unknown): value is number | string {
    return typeof value === "string" || typeof value === "number"
}

// isNumberorstring("2")
// console.log(isnumberorstring1("2"))


function logvalueifexists(value: number | string | null | undefined) {
    if (isNumberorstring(value)) {
        value?.toString()
    } else {
        console.log("value does not exist within the given parameters")
    }
}

// logvalueifexists(123)
// console.log(logvalueifexists("123"))

interface comedian {
    funny: boolean
}

interface standupcomedian extends comedian {
    
}