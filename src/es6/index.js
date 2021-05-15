// ? 2015
// * Default params

// ! Before
function newFunction(name, age, country) {
    var name = name || "Andres"
    var age = age || 22
    var country = country || "EC"
    console.log(name, age, country)
}

// ? ES +6
function newFunction2(name = "Andres", age = 22, country = "EC") {
    console.log(name, age, country)
}


newFunction2()
newFunction2("Ale", 21, "EC")


// * Template literals
let hello = "Hello"
let world = "world"

// ! Before
let epicPhrase = hello + " " + world
console.log(epicPhrase)

// ? ES +6
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)



// * Multiline strings
// ! Before
let lorem = "Es un hecho establecido hace demasiado tiempo que un lector se distraerá \n"
+ "Es un hecho establecido hace demasiado tiempo que un lector se distraerá"

// ? ES +6
let lorem2 = `Es un hecho establecido hace demasiado tiempo que un lector se distraerá
con el contenido del texto de un sitio mientras que mira su diseño.`

console.log(lorem)
console.log(lorem2)


// * Destructuring
let person = {
    name: "Andres",
    age: 22,
    country : "EC"
}

// ! Before
console.log(person.name, person.age, person.country)

// ? ES +6
let {name, age} = person
console.log(name, age)


// * Propagation operator
let team1 = ["Andrew", "Palula", "Ale"]

let team2 = ["Carla", "Joshua", "Soledad"]

let education = ["David", ...team1, ...team2]

console.log(education)


// * Use of let
{
    var globalVar = "Global var"
}

{
    let globalLet = "Global let"
    console.log(globalLet)
}

console.log(globalVar)


// * use of const
const a = "B"
a = "A"


// * Object properties upgraded
let name = "Andres"
let age = 2

// ! Before
obj = {name: name, age: age}
console.log(obj)
// ? ES +6
obj2 = {name, age}
console.log(obj2)


// * Arrow functions
const names = [
    {name: "Andres", age: 22},
    {name: "Ale", age: 21},
]
// ! Before
let listOfName = names.map(function(item){
    console.log(item.name)
})

// ? ES +6
let listOfName2 = names.map((item)=>console.log(item.name))

// functions
const listOfName3 = (name, age, country) => {
    ...
}

const listOfName4 = name => {
    ...
}

const square = num => num * num

// * Promises
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("Hey!")
        }else {
            reject("Ups!!")
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log("Another then"))
    .catch(error => console.log(error))


// * Classes
class Calculator {
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }

    sum(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return valueA + valueB
    }
}

const calc = new Calculator()
console.log(calc.sum(2, 2))

// * Import/Export
import  {hello}  from './module.js'
console.log(hello())


function* helloworld() {
    if(true){
        yield "Hello, "
    }
    if (true){
        yield "World"
    }
}
const generatorHello = helloworld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)