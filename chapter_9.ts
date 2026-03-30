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
    routine: string
}

function isstandupcomedian(value: comedian): value is standupcomedian {
    return 'routine' in value
}

function workwithcomedian(value: comedian) {
    if (isstandupcomedian(value)) {
        console.log(value.routine)
    }
    // console.log(value.routine)
}

function islongstring(input: string | undefined): input is string {
    return !!(input && input.length >= 7)
}

function workwithtext(text: string | undefined) {
    if (islongstring(text)) {
        console.log("long text: ", text.length)
    } else {
        // console.log("short text: ", text?.length)
    }
}

interface Ratings {
    audience: number
    critics: number
    // key: number
}

// interface ratings {
//     audience: string
//     critics: string
// }

// function getrating(Ratings: string, key: string): number {
//     return ratings[key]
// }

// const ratings: Ratings = { audience: 66, critics: 84 }

// getrating(ratings, "audience")

// getrating(ratings, "not valid")

function getCountKeyof(ratings: Ratings, key:"audience" | "critics"): number {
    return ratings[key]
}

const ratings: Ratings ={ audience: 66, critics: 54}

console.log(getCountKeyof(ratings, "audience"))

console.log(getCountKeyof(ratings, "critics"))

// typeof operator

const original = {
    medium: "Movie",
    title: "Mean girls"
}

let adaptation: typeof original

// if (Math.random() > 0.5) {
//     adaptation = { ...original, medium: "play"}
// } else {
//     adaptation = { ...original, medium: 2}
// }


const ratings1 = {
    imdb: 5.4,
    metacritic: 82
}

// console.log(ratings1)

function logRating(key: keyof typeof ratings1) {
    console.log(ratings1[key])
}

logRating("imdb")

logRating("metacritic")

// logRating("invalid")

// type assertions

const rawData = `["grace", "frankie"]`

console.log(JSON.parse(rawData))

JSON.parse(rawData) as string[]

JSON.parse(rawData) as [string, string]

console.log(JSON.parse(rawData) as `['grace', 'frankie']`)

const rawData1 = `["grace", "frankie"]`

console.log(JSON.parse(rawData1))

let maybeDate = Math.random() > 0.5 ? undefined : new Date()

maybeDate as Date

console.log(maybeDate)

// non null assertions

const seasonCounts = new Map([
    ["I Love Lucy", 6],
    ["the golden girls", 7],
])

const maybeValue = seasonCounts.get("I Love Lucy")

// console.log(maybeValue.toLowerCase())

const knownValue = seasonCounts.get("I Love Lucy")!

// console.log(knownValue.toUpperCase())

// type assertion caveats

const seasonCounts1 = new Map([
    ["Broad City", 5],
    ["Community", 6],
])

const knownValue1 = seasonCounts1.get("I Love Lucy")!

// console.log(knownValue1.toUpperCase())
// no runtime error

// assertions versus declarations

