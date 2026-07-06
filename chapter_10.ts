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

