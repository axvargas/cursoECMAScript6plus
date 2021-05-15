// ? 2019

// * Array.flat
let array = [1,2,3, [4,5,6, [7,8,9]]]
// .flat(depth)
console.log(array.flat(2))

// * Array.flatMap
let array = [1,2,3,4,5]
console.log(array.flatMap(value=>[value, value * 2]))
console.log(array.flatMap(value=>value * 2))
console.log(array.flatMap(value=>[value, value * 2, value * 3]))

// * string.trimStart
let hello = "      Hello World!       "
console.log(hello)
console.log(hello.trimStart())
console.log(hello.trimStart().trimEnd())

// * Optional catch binding

try {
   // do sth 
} catch {
    //you can use variable error, no matter what
}



// * Object.fromEntries -> convert List of list into Object
let entries = [["name", "Andres"],["age", 22]]
console.log(Object.fromEntries(entries))


// * Symbol Object
let mySymbol = `My symbol`
let symbol = Symbol(mySymbol)
console.log(symbol.description)