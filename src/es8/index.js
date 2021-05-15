// ? 2017

// * Obect.entries
const data = {
    frontend: "Andres",
    backend: "Joshua",
    design: "Paula",
}

const entries = Object.entries(data)
console.log(entries)

// to check the lenght of attrs in an object
console.log(entries.length)

// * Object.values
const data = {
    frontend: "Andres",
    backend: "Joshua",
    design: "Paula",
}

const values = Object.values(data)
console.log(values)
console.log(values.length)


// * PadStart/PadEnd
const string = "hello"
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, ' Andres'))

// * trailing commas
const obj = {
    name: "Jack",
}


// * ASYNC AWAIT
const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (false)
            ? setTimeout(() => 
                resolve("Hello world")
            , 3000)
            : reject(new Error("Test Error"))
    })
}

const HelloAsync = async() => {
    const message = await helloWorld()
    console.log(message)
}
HelloAsync()

const anotherFunction = async() => {
    try {
        const message = await helloWorld()
        console.log(message)
    } catch (error) {
        console.log(error)
    }
}
anotherFunction()