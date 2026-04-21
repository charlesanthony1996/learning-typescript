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