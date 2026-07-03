// declaration files

import { Character } from "./types";
import { Window } from "./types/window";

export const charachter: Character ={
    catchphrase: "hello mello",
    name: "charles"
}

declare const myGlobalValue: string

// 
// console.log(myGlobalValue)

// export 
// console.log(charachter)

// export function logWindowVersion() {
//     console.log(`Window version is: ${ Window }`)
//     // window.alert("Built in window types still work! Hooray")
// }

// logWindowVersion()


// global augmentations

declare global {

}


