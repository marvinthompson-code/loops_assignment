// a. Write a `while` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1
let num = 6

while (num >= 1) {
    console.log(num);
    num --;
}
//b. Write a `for` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1

for (let num = 6; num >= 1; num --) {
    console.log(num)
}

// ## Problem Two

// a. Write a `while` loop that takes the variable "max", and iterates over all numbers from 0 to "max". 
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

let max = 20
let x = 0

while (x <= max) {
    if (x % 2 === 0) {
        console.log(x + " this is even")
    } else {
        console.log(x + " this is odd")
    } x ++;
}

//b. Use a `for` loop instead

for (x; x <= max; x ++) {
    if (x % 2 === 0) {
        console.log(x + " this is even")
    } else {
        console.log(x + " this is odd")
    }
}

//a. Write a `while` loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop, it will multiply the number of "x" by 9 and log the result 
let x1 = 8
let y = 0

while (y <= x1) {
    console.log(y * 9);
    y ++
}

//b
for (y; y <=x1; y++) {
    console.log(y * 9)
}