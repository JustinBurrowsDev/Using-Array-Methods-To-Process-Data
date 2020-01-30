//////////////////////////////Question 1

let avg = items.reduce(function(a, b) {
    return a + b.price
}, 0) / items.length

document.querySelector("#answer1").innerHTML = avg.toFixed(2)

//////////////////////////////Question 2

let itemsBetween = items.filter(function(a) {
    return a.price > 14 && a.price < 18

}).map(function(item) {
    return item.title + '\n\n'
}).join('')
console.log(itemsBetween)

document.querySelector("#answer2").innerHTML = itemsBetween

///////////////////////////////Question 3 

let gbpItem = items.filter(function(a) {
    return a.currency_code === 'GBP'

}).map(function(items) {
    return `${items.title} costs ${items.price}`
})


document.querySelector("#answer3").innerHTML = gbpItem

///////////////////////////////Question 4

let madeOfWood = items.filter(function(a) {
    return a.materials.indexOf('wood') > -1

}).map(function(items) {
    return items.title + '\n\n'
}).join('')

document.querySelector("#answer4").innerHTML = madeOfWood

///////////////////////////////Question 5

let eightHTML = ''
let eightOrMore = items.filter(function(item) {
    return item.materials.length >= 8
}).forEach(function(item) {
    eightHTML += `${item.title} has ${item.materials.length} materials\n` + '\n\n'
    eightHTML += item.materials.join('\n')
    eightHTML += '\n\n'
})

document.querySelector("#answer5").innerHTML = eightHTML

///////////////////////////////Question 6

let made = items.filter(function(a) {
    return a.who_made === "i_did"
})
document.querySelector("#answer6").innerHTML =
    made.length + " were made by their sellers"





// let obj = [
//     { name: "bread", price: 34, lastSold: 99 },
//     { name: "pasta", price: 15, lastSold: 4 }
// ]

// //how many items are in the obj xfarray
// console.log(obj.length)

// console.log(obj[1])

// // console.log(obj[1].price)

// obj.forEach((currentItem) => {
//     console.log(currentItem.price)
// })

// const totalPrice = obj.reduce((acc, val) => {
//     return acc.price + val.price
// })

// console.log(totalPrice)
// const avgPrice = totalPrice / obj.length
// console.log(avgPrice)s