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

