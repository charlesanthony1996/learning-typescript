// interfaces

// type Poet = {
//     born: number,
//     name: string
// }


// equivalent syntax for an interface
interface Poet {
    born: number
    name: string
}

let valueLater: Poet

valueLater = {
    born: 1935,
    name: 'Sara Teasdale'
}

// valueLater1 = "Emily Dickinson"

// valueLater = {
//     born: true,
//     name: 'Sappho'
// }

// gives an error since born is not a boolean

interface Book {
    author?: string
    pages: number
}

const ok: Book = {
    author: "Rita Dove", 
    pages: 80
}

const missing: Book = {
    pages: 80
}

// read only properties

interface Page {
    readonly text: string
}

function read(page: Page) {
    console.log(page.text)

    // reading the text property doesnt attempt to modify it
    // page.text += "!"
}

const pageIsh = {
    text: "Hello world!"
}

// an inferred object type with text not a page
// page.text += "!"

// read(messengerIsh)


// functions and methods

interface hasbothFunctiontypes {
    property: () => string,
    method(): string
}

const hasBoth: hasbothFunctiontypes = {
    property: () => "",
    method() {
        return "its charles here"
    }
}

console.log(hasBoth.property())
console.log(hasBoth.method())

// using the optional modifier on these two in one now

interface OptionalReadonlyFunctions {
    optionalProperty?: () =>  string
    optionalMethod?(): string
}


// call signatures


type FunctionAlias = (input: string) => number

interface CallSignature {
    (input: string): number
}

// type: (input: string) => number
const typedFunctionAlias: FunctionAlias = (input) => input.length

// type: (input: string) => number
const typedCallSignature: CallSignature = (input) => input.length



interface FunctionWithCount {
    count: number
    (): void
}

let hasCallCount: FunctionWithCount

function keepsTrackOfCalls() {
    keepsTrackOfCalls.count += 1
    console.log(`Ive been called ${keepsTrackOfCalls.count} times!`)
}

keepsTrackOfCalls.count = 0

hasCallCount = keepsTrackOfCalls

function doesNotHaveCount() {
    console.log("no idea")
}

// hasCallCount = doesNotHaveCount

keepsTrackOfCalls()
keepsTrackOfCalls()

// index signatures

interface WordCounts {
    [i: string]: number
}

const counts: WordCounts = {}

counts.apple = 0
counts.banana = 1


// type is boolean not number
// counts.cherry = false

interface DatesByName {
    [i: string]: Date
}

const publishDates : DatesByName = {
    // Frankenstein: new Date("1 January 2018")
    Frankenstein: new Date()
}

// console.log(publishDates)

publishDates.Frankenstein
console.log(publishDates.Frankenstein.toString())

publishDates.Beloved

// runtime error
// console.log(publishDates.Beloved.toString())

// mixing properties and index signatures

interface HistoricalNovels {
    Oroonko: number
    [i: string]: number
}

const novels: HistoricalNovels = {
    Outlander: 1991,
    Oroonko: 1688
}

// const missingOroonko: HistoricalNovels = {
//     Outlander: 1991
// }

interface ChapterStarts {
    preface: 0
    [i: string]: number
}

// const correctPreface: ChapterStarts = {
//     preface: 1
// }

// numeric index signatures

// interface MoreNarrowNumbers {
//     [i: number]: string
//     [i: number]: string | undefined
// }

// const mixedNumbersAndStrings: MoreNarrowNumbers = {
//     0: '',
//     key1: '',
//     key2: undefined
// }

// interface MoreNarrowStrings {
//     [i: number]: string | undefined
//     [i: string]: string
// }


interface Novel {
    author: {
        name: string
    }
    setting: Setting
}

interface Setting {
    place: string
    year: number
}

let myNovel: Novel


myNovel = {
    author: {
        name: "Jane austen"
    },
    setting: {
        place: "England",
        year: 1812
    }
}

// myNovel = {
//     author: {
//         name: "Emily Bronte"
//     },
//     setting: {
//         place: "West Yorkshire"
//     }
// }

// interface Extensions

interface Writing {
    title: string
}

interface Novella extends Writing {
    pages: Number
}

let myNovella: Novella = {
    pages: 195,
    title: "Ethan Frome"
}

// let missingPages: Novella = {
//     title: "The awakening"
// }

// let extraProperty: Novella = {

// }

// overriden properties

interface WithNullableName {
    name: string | null
}

interface WithNonNullableName extends WithNullableName {
    name: string
}

// interface WithNumericName extends WithNullableName {
//     name: number | string
// }

// extending multiple interfaces

interface GivesNumber {
    giveNumber(): number
}

interface GivesString {
    giveString(): number
}

interface GivesBothAndEither extends GivesNumber, GivesString {
    giveEither(): number | string
}

function useGivesBoth(instance: GivesBothAndEither) {
    instance.giveEither()
    instance.giveNumber()
    instance.giveString()
}
