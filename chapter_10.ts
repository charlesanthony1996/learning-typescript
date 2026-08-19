// generics

// function identity(input) {
//     return input
// }


// errors.
// has no type
// identity("abc")
// identity(123)
// identity({ quote: "i think your self emerges more clearly over time"})


// function identity(input: any) {
//     return input
// }

// let value = identity(42)

// generic functions

// function identity<T>(input: T) {
//     return input
// }

// const numeric = identity("me")
// console.log(numeric)

// const stringy = identity(123)
// console.log(stringy)

const identity = <T>(input: T) => input

identity(123)
identity("charles")

function logWrapper<Input>(callback: (input: Input) => void) {
    return (input: Input) => {
        console.log("input: ", input)
        callback(input)
    }
} 

// console.log(logWrapper((input: "123") => {
//     return (input: "123")

// }))

// logWrapper((input: "string") => {
//     console.log(input.length)
// })

// no input here. so gives an error
// logWrapper((input) => {
//     console.log(input.length)
// })




logWrapper<string>((input) => {
    console.log(input.length)
})

const hello_var = logWrapper<string>((input) => {
    console.log(input.length)
})

// hello_var("charles")

// multiple function type parameters

function makeTuple<First, Second>(first: First, second: Second) {
    return [ first, second] as const
}

let tuple = makeTuple(true, false)
let tuple2 = makeTuple("charles", true)


// console.log(tuple2)


function makePair<Key, Value>(key: Key, value: Value) {
    return { key, value }
}

let make_pair_1 = makePair("charles", true)

// console.log(make_pair_1)

makePair<string, number>("charles", 13)
makePair<number, number>(34, 43)


// an error here, since the it needs two arguments, not one
// makePair<string>("charles")

// generic interfaces
interface Box<T> {
    inside: T
}

let stringBox: Box<string> = {
    inside: "charles"
}

// console.log(stringBox)

let numberBox: Box<number> = {
    inside: 123
}

// console.log(numberBox)


// takes in a number and assigns it to a boolean.
// this gives an error
// type safety 101
// let incorrectBox: Box<number> = {
//     inside: False
// }

// console.log(incorrectBox)


// fun fact -> arrays methods in typescript are a generic interface

interface Array<T> {
    pop(): T | undefined
    
    push(...items: T[]): number

}


// inferred generic interface types

interface LinkedNode<Value> {
    next?: LinkedNode<Value>
    value: Value
}


function getLast<Value>(node: LinkedNode<Value>): Value {
    return node.next ? getLast(node.next) : node.value
}


let lastDate = getLast({
    value: new Date("03-06-1996")
})

console.log(lastDate)

// inferred value type argument: string
let lastFruit = getLast({
    next: {
        value: "banana",
    },
    value: "apple"
})

console.log(lastFruit)

// inferred value type argument: number
// let lastMismatch = getLast({
//     next: {
//         value: 123
//     },
//     value: false,
// })

// console.log(lastMismatch)

interface CrateLike<T> {
    contents: T
}

// let missingGeneric: CrateLike = {
//     contents: "??"
// }