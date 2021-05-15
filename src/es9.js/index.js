// ? 2018

// * Respose operator
const obj = {
    name: "Andres",
    age: 22,
    country: "EC",
}

let { name, ...all} = obj
console.log(all)
console.log(name)

let { country, ...allThings} = obj
console.log(allThings)
console.log(country)

// * Spread operator with objects

const obj = {
    name: "Andres",
    age: 22,
}

const obj1 = {
    ...obj,
    country: "EC",
}
console.log(obj1)


// * Promise.finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() =>  resolve("Hello World!"), 3000)
            : reject(new Error("Test Error"))
    })
}

helloWorld()
    .then( response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Everything done"))


// * Regex match[index] indec starts in 1
// Regex fecha yyyy-mm-dd
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(match)
console.log(year, month, day)

const match2 = regexData.exec("154896") 
console.log(match2)

// * Groups in regex
const regexData2 = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/
const match3 = regexData2.exec('2018-04-20');
const { year, month, day } = match3.groups;
console.log(match3)
console.log(year, month, day);