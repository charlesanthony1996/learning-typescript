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

logWrapper((input: "string") => {
    console.log(input.length)
})

// no input here. so gives an error
// logWrapper((input) => {
//     console.log(input.length)
// })


