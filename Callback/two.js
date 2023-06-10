let sum = (a, b) => {
    return a + b
}
let multi = (a, b) => {
    return a * b
}
let calc = (a, b, callback) => {
    return callback(a, b)
}
console.log(calc(10, 20, sum))
console.log(calc(10, 20, multi))
console.log(calc(200, 100, (a, b) => { return a - b }))