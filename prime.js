let number=13
let isPrime = true;

if (number === 1) {
    console.log("Not Prime");
}
else if (number > 1) {

    for (let i = 2; i < number; i++) {
        if (number % i != 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("prime number");
    } else {
        console.log("number is a not prime number`);
    }
}
else {
    console.log("not a prime number.");
}