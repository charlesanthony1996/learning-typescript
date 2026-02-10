// any type

let anyvalue: any
anyvalue = "lucille ball"
anyvalue = 123

console.log(anyvalue)
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