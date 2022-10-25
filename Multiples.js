//Write a JavaScript program to ﬁnd the sum of the multiples of 3 and 5 under 1000.

//Normal approch to find sum of multiples of 3 and 5 under 1000.
let sum = 0;

for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum = sum + i;
    }
}
console.log('Calculating the sum without using a function.');
console.log(`The sum of multiples of 3 and 5 under 1000 is ${sum}`);

console.log("--------------------------------------------------------");
//using function to find sum of multiples of 3 and 5 under 1000.
let sums = 0;

function multiplesOf3and5(number) {
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sums += i;
        }
    }
    console.log('Below is the result of Using function to calculate sum.');
    console.log(`The sum of multiples of 3 and 5 under 1000 is ${sums}.`);
}

//function call.
multiplesOf3and5(1000);