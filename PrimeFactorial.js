//Write a program to ﬁnd the factorial of all prime numbers between a given range .
//Range will be passed as 2 values in the function parameters.
//eg- if it is needed to ﬁnd the values for numbers 1-100,
//then function declaration can look like - function prime(1,100).

//NOTE :
//A Prime number is a positive integer that is only divisible by 1 & itself.
//eg: 2, 3, 5, 7, 11, etc are first few prime numbers.
//For eg : 4 isn't a prime number because it's divisible by 1, 2 & 4 itself. It is a composite number.

function prime (num1, num2) {
    for (let i=num1; i<=num2; i++) {
        let notprime = false;
        for (let j=2; j<=i; j++) {
            if (i%j === 0 && i!==j) {
                notprime = true;
            }
        }
        if (notprime === false) {
            //console.log(i);
            let fact = 1;
            for (let k = 1; k <= i; k++) {
                fact *= k;
            }
            console.log(`The Factorial of prime number ${i} is equal to ${fact}`);
        }
    }
    
}

prime(1, 100);
