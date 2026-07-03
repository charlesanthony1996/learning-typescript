// const { name, ...rest} = user

// const combined = [...arr1, ...arr2]

// arr.find 

const arr1 = [1, 2, 3, 4, 5]

arr1.find(x => x === 5)
// console.log(arr1.some(x => x + 1))
console.log(arr1.reduce((acc, x) => acc + x, 1))



interface User {
    id: number,
    name: string,
    email?: string
}

type PartialUser = Partial<User>


function first<T>(arr: T[]): T | undefined {
    return arr[0]
}


// console.log(first([1, 2, 3, 4]))

