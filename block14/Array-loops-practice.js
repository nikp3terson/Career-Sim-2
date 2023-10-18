// create an array//

let vegetables = ['cabbage', 'lettuce', 'spinach']

console.log(vegetables)

vegetables[0]

vegetables[1]

console.log(vegetables[2])

// .push will add variable to the end of the array
// .pop will remove the final variable from the array




// LOOPS 
// FOR (INITIALIZATION; CONDITION; AFTERTHOUGHT) { .. }

for ( let countDown = 10; countDown > 0; countDown = countDown - 1)
console.log('T-', countDown)


// create an array of random numbers
let random = math.random() * 100 // number between 0 and 100

let nums = []

for ( let start = 0; start < Math.random() * 50 + 1; start++ ) {
    nums.push(Math.floor(Math.random() * 100))
}
console.log(nums)
