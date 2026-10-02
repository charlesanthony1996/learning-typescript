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
//     inside: "??"
// }

// generic classes

class Secret<Key, Value> {
    key: Key
    value: Value

    constructor(key: Key, value: Value) {
        this.key = key
        this.value = value
    }

    getValue(key: Key): Value | undefined {
        return this.key === key ? this.value : undefined
        // if (this.key === key) {
        //     return this.value
        // }
    }
}


const storage = new Secret(12345, "luggage")
// console.log(storage)

// console.log(storage.getValue(1987))
console.log(storage.getValue(12345))
// storage.getValue(12345)

// explicit generic class types

class CurriedCallback<Input> {
    #callback: (input: Input) => void

    constructor(callback: (input:Input) => void) {
        this.#callback = (input: Input) => {
            console.log("Input: ", input)
            callback(input)
        }
    }

    call(input: Input) {
        this.#callback(input)
    }
}

// type curriedcallback<string>
new CurriedCallback((input: string) => {
    console.log(input.length)
})

// type curriedcallback<unknown>
new CurriedCallback((input) => {
    // console.log(input.length)
})


// type curriedcallback<string>
new CurriedCallback<string>((input) => {
    console.log(input.length)
})

// new CurriedCallback<string>((input: boolean) => {

// })

// extending generic classes

class Quote<T> {
    lines: T

    constructor(lines: T) {
        this.lines = lines
    }
}

class SpokenQuote extends Quote<string[]> {
    speak() {
        console.log(this.lines.join("\n"))
    }
}

new Quote("The only real failure is the failure to try.").lines

new Quote([4, 8, 15, 16, 23, 42]).lines

new SpokenQuote([
    "Greed is so destructive",
    "It destroys everything"
])


console.log(SpokenQuote)

class AttributedQuote<Value> extends Quote<Value> {
    speaker: string

    constructor(value: Value, speaker: string) {
        super(value)
        this.speaker = speaker
    }
}


new AttributedQuote(
    "Charles Anthony",
    "the road to success is always under construction"
)

// page 195
// implementing generic interfaces

interface ActingCredit<Role> {
    role: Role
}

class MoviePart implements ActingCredit<string> {
    role: string
    speaking: boolean
    
    constructor(role:string, speaking: boolean) {
        this.role = role
        this.speaking = speaking
    }
}

const part = new MoviePart("charles anthony", true)

// console.log(part)

// console.log(part.role)
// console.log(part.speaking)

// class IncorrectExtension implements ActingCredit<string> {
//     role: boolean
// }

// method generics
// class methods may declare their own generic types seperate from their class instance

class CreatePairFactory<Key> {
    key: Key

    constructor(key: Key) {
        this.key = key
    }

    createPair<Value>(value: Value) {
        return { key: this.key, value }
    }
}

const factory = new CreatePairFactory("role")

// console.log(factory)

const numberPair = factory.createPair(10)

// console.log(numberPair)

const stringPair = factory.createPair("Sophie")

// console.log(stringPair)

// static class generics

class BothLogger<OnInstance> {
    instanceLog(value: OnInstance) {
        console.log(value)
        return value
    }

    // static staticLog<OnStatic>(value: OnStatic) {
    //     let fromInstance: OnInstance

    //     // it gives an error here
    //     // static members cannot reference class type arguments here
    // }
}

const logger = new BothLogger<number[]>
logger.instanceLog([1, 2, 3])

// inferred onstatic type argument: boolean[]
// BothLogger.staticLog([false, true])

// explicit onstatic