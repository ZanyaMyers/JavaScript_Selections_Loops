console.log("Hello World!\n==========\n");

// // Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");

// for(let i = 0; i < 100; i++) {
//     if ( i % 2 == 0) {
//         continue; 
//     } else {
//         console.log(i); 
//     }
// }

// Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");

// for (let i = 0; i < 100; i++) {
//     if (i % 3 == 0 && i < 5 == 0) {
//         console.log("FizzBuzz"); 
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if ( i % 5 == 0) {
//         console.log("Buzz"); 
//     }
//     else { 
//         console.log(i); 
//     }
   
    
// }

// Exercise 3 Section 
// Exercise 1 : While 
// while (i < 100) {
//     if ( i % 2 == 0) {
//         continue; 
//     } else {
//         console.log(i); 
//     }
//     i++;
// }

// // Exercise 1 : Do while 
// do {
//     if ( i % 2 == 0) {
//         continue; 
//     } else {
//         console.log(i); 
//     }
//     i++;
// } while (i < 100); 


// Repeat both exercise 1 and 2 as while and do while 
//Exercise 2 : While Loop
// let i = 1; 
// while (i <= 100) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz"); 
//     }
//     else if (i % 3 == 0) {
//         console.log("Fizz"); 
//     }
//     else if (i % 5 == 0) {
//         console.log("Buzz"); 
//     }
//     else {
//         console.log(i); 
//     }
//     i++; 
// }
// Exercise 2 : Do While Loop
/* let i = 1; 
do {
    if (i % 3 == 0 && i % 5 == 0) {
         console.log("FizzBuzz"); 
        }
    else if (i % 3 == 0) {
        console.log("Fizz"); 
        }
    else if (i % 5 == 0) {
        console.log("Buzz"); 
        }
    else {
        console.log(i); 
    }
    i++;
} while (i <= 100);  
 */

//Exercise 4 
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 0; i <= n; i++) {
    if (i === value) {
        console.log ("Found value!"); 
        break; 
    }
    else {
        break;
    }
    console.log("Did not find value"); 
}

