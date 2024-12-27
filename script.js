

// Write a program using for loop to print Numbers from 1 to 10.

// for(i=1; i<11; i++){
//     console.log(i)
// }

// Write a program using while loop to sum of Numbers from 1 to 100.
// let sum=0;
// let indext=1;
// while(indext<=100){
//     sum+=indext;
//     indext++;
// }

// Write a program using for loop to print all even numbers between 1 and 20
// for(i=2; i<20; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// Write a program using while loop to reverse the string (Softwarica)

// let Input="Softwarica"; reversed="", i=Input.length-1;
// while(i>=0) reversed+=Input[i--];
// console.log(reversed);


// Write a program to find the largest number of Array [5, 8, 12, 3, 7]
// let number=[5,8,12,3,7];
// let largest =0;
// for(i=0; i<number.length; i++){
//     if(number[i]>largest){
//         largest=number[i]
//     }
// }
// console.log(largest)

// Write a program using a for loop to print the multiplication table of a given number (e.g., 5).

// let number=5;
// for(i=1; i<=10; i++){
//     console.log(`${number} * ${i} = ${number*i}`)
// }
    
// Write a program using a while loop to count the number of digits in a given number.

// let number=123456789101112;
// let count=0;
// while(number>0){
//     number=Math.floor(number/10);
//     count++;
// }
// console.log(count);

// Write a program using a for loop to generate the first 10 numbers of the Fibonacci sequence.
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Sequence:');
// console.log(n1); // print 0
// console.log(n2); // print 1

// for (let i = 1; i <= 8; i++) {
//     nextTerm = n1 + n2;
//     console.log(nextTerm);
//     n1 = n2;
//     n2 = nextTerm;
// }




// Write a program using a while loop to calculate the sum of digits of a given number.
// let number = parseInt(prompt("Enter a number: "));
// let sumOfDigits = 0;

// while (number > 0) {
//     let digit = number % 10;
//     sumOfDigits += digit;
//     number = Math.floor(number / 10);
// }

// console.log("The sum of the digits is:", sumOfDigits);


 // Write a program using a for loop to count the number of vowels in a given string (e.g., "Softwarica").

// let str = "Softwarica";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     if ("aeiouAEIOU".includes(str[i])) {
//         count++;
//     }
// }

// console.log("Number of vowels:", count);
