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

// explicit onstatic type argument: string
// BothLogger.staticLog<string>("You cant change the music of your soul")

// generic type aliases
type Nullish<T> = T | null | undefined

// generic type aliases are commonly used with functions to describe the type of a generic function

type CreatesValue<Input, Output> = (input: Input) => Output

let creator: CreatesValue<string, number>

creator = text => text.length

// type string is not assignable to type 'number'
// creator = text => text.toUpperCase()

// generic discriminated unions
type Result<Data> = FailureResult | SucessfulResult<Data>

interface FailureResult {
    error: Error,
    succeeded: false
}

interface SucessfulResult<Data> {
    data: Data,
    succeeded: true
}

// function handleResult(result: Result<string>) {
//     if (result.succeeded) {
//         // type of result? successful
//         console.log(`we did it ${result.succeeded}`)
//     } else {
//         // type of result? failures result
//         console.error(`Awww ${result.error}`)
//     }
    
//     // property data does not exist for 'Result<string>'
//     // property data does not exist for 'Successful<string>'
//     return result.data

//     // 

// }

// generic modifiers

// generic defaults

interface Quote<T = string> {
    value: T
}

// let explicit: Quote<number> = { value: 123 }

// let implicit: Quote = { value: "charles anthony"}

// let mismatch: Quote = { value: 123 }

interface KeyValuePair<Key, Value = Key> {
    key: Key,
    value: Value
}


let allExplicit: KeyValuePair<string, number> = {
    key: "rating",
    value: 10
}

let oneDefaulting: KeyValuePair<string> = {
    key: "rating",
    value: "ten"
}

// let firstMissinh: KeyValuePair = {
//     key: "rating",
//     value: 10
// }


function inTheEnd<First, Second, Third = number, Fourth = string>() {

}


// this gives an error
// since required type parameters may not follow optional type parameters
// function inTheMiddle<First, Second = boolean, Third = number, Fourth>() {

// }

// constrained generic types

interface WithLength {
    length: number
}

function logWithLength<T extends WithLength>(input: T) {
    console.log(`length: ${input.length}`)
    return input
}

logWithLength("hello")
logWithLength([true, false])

logWithLength({ length: 123})

