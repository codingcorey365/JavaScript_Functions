console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// Objective
// Your objective is to practice JavaScript functions with different parameter values and results.
// Fork and clone the Exercise Repo:
// JavaScript Functions


// // Exercise 1: Print Odds Continued

//     // In the past, we created a selection statement inside a loop that counted from 1 to 100 and only printed out the odd numbers.

//     // Your task is to write a function printOdds() that takes one parameter, count, and uses a loop and selection statement to count to the number passed in, printing out the odd numbers.

//     // Declare a function named printOdds using declaration notation (function <name>(){...})

//     // The function should take in one parameter named count

//     // The function body should:

//     // contain a for loop that counts to the parameter passed in,
//     // an if/else statement that determines if the current value is odd,
//     // and then console.log() the odd value to the console
//     // BONUS: Now that you do not know exactly what number may be passed in as count, use an if statement to account for a negative count being passed in.

//     function printOdds(count)
//     {
//         for(let i = 1; i<= count; i++)
//         {
//             if(count<0)
//                 {
//                     console.log(`${count} is a negative number.`);
//                 }

//             if(i % 2 != 0)
//             {
//                 console.log(`The number ${i} is odd.`);
//             }
//             else
//             {
//                 console.log(`The number ${i} is even.`)
//             }
            
//         }
//     }

//     printOdds(100);

// Exercise 2: Legal?

    // Write a function that receives a name and age, and prints a greeting message to the console using the name.

    // Declare a function named checkAge using declaration notation (function <name>(){...})

    // The function should take in two-parameter named userName & age

    // The function body should:

    // declare and initialize an aboveSixteen local variable with string value: "Congrats ${userName}, you can drive!",
    // declare and initialize an belowSixteen local variable with string value: "Sorry ${userName}, but you need to wait until you're 16.",
    // an if/else statement that determines if the age value is below 16,
    // and then console.log() the correct message to the console.
    // BONUS: Remember that parameters are optional, and no userName or age value could be passed in. Correctly account for no parameter being passed in.

//     function checkAge(userName, age)
//     {
//         let aboveSixteen = `Congrats ${userName}, you can drive!`;
//         let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

//         if(userName == null || age == null){
//             console.log(`Please enter a valid username and age.`);
//             userName = `Your username has no input`
//             age = `Your age has no input`
//             console.log(userName);
//             console.log(age);
//         }

//         else if(age<16){
//             console.log(belowSixteen);
//         }

//         else if(age>=16){
//             console.log(aboveSixteen);
//         }
//     }
// checkAge();
// Exercise 3: Which Quadrant?

    // Write a function that receives two parameters, x and y coordinates in the Cartesian plane, and prints out a message indicating if the point (x, y) lies on either the x or y axis, or what quadrant the point lies in.

    // For example:

    // (0, 2) is on the y axis
    // (1, 2) is in Quadrant 1
    // (-6, 18) is in Quadrant 2

//     function whichQuadrant(x, y){
        
//         // origin
//         if(x == 0 && y == 0){
//             console.log(`The coordinate is on the origin of the cartesian plane.`);
//         }
        
//         // x axis
//         if(y==0 && x >= 0 || y==0 && x <= 0){
//             console.log(`The coordinate is on the x axis of the cartesian plane.`);
//         }
        
//         // y axis
//         if(x==0 && y >= 0 || x==0 && y <= 0){
//             console.log(`The coordinate is on the y axis of the cartesian plane.`);
//         }
        
//         // Quadrant 1
//         if(x > 0 && y > 0){
//             console.log(`The coordinate is in quadrant 1 of the cartesian plane.`);
//         }
        
//         // Quadrant 2
//         if(x < 0 && y > 0){
//             console.log(`The coordinate is in quadrant 2 of the cartesian plane.`);
//         }

//         // Quadrant 3
//         if(x < 0 && y < 0){
//             console.log(`The coordinate is in quadrant 3 of the cartesian plane.`);
//         }

//         // Quadrant 4
//         if(x > 0 && y < 0){
//             console.log(`The coordinate is in quadrant 4 of the cartesian plane.`);
//         }
//     }
// whichQuadrant(1,-1);

// Exercise 4: What type of triangle?

    // Write a function that receives three numbers that represent the lengths of a triangles three sides. If the three sides do not form a valid triangle (the sum of two sides should always be greater than the length of the third side), you should return a message indicating an invalid triangle. Otherwise, return a string indicating the type of triangle the three sides make (equilateral: all side lengths equal, isosceles: only two side lengths equal, or scalene: all different side lengths).

    // For example:
    // Sides 1, 2, 2 make an isosceles triangle
    // Sides 1, 1, 2 make an invalid triangle

    // let side1;
    // let side2;
    // let side3;

    // function isTriange(side1, side2, side3){

    //     if(side1 > side2 + side3 || side2 > side1 + side3 || side3 > side1 + side2){
    //         console.log(`This is not a valid triangle.`);
    //     }

    //     if(side1 == side2 && side2 == side3 ){
    //         console.log(`This is an equilateral trianle.`);
    //     }

    //     if(side1 == side2 && side1 != side3 || side1 == side3 && side1 != side2 ||side2 == side3 && side2 != side1 ){
    //         console.log(`This is an isosceles triangle`);
    //     }

    //     if(side1 != side2 && side1 != side3 || side2 != side1 && side3 != side2 ||side3 != side1 && side1 != side2 ){
    //         console.log(`This is a scalene triangle`);
    //     }       
    // }
    // isTriange(4,2,3);


// BONUS Exercise 5: Data Plan Status

    // Write a function that will display feedback on cell phone data usage. Cell phone plans for this particular company give you a certain amount of data every 30 days which must be used or they are lost (no rollover). We want to track the average amount of data used per day and inform the user if they are using too much data or can afford to use more.
    // Write a function that accepts the following parameters:
    // planLimit: amount of data in the plan per 30 day period
    // The function should compute whether the user is over, under, or right on the average daily usage under the plan. It should also inform them of how much data is left and how much, on average, they can use per day for the rest of the month. If they’ve run out of data, it should inform them of that too.
    // For example, if the user enters planLimit = 100, day = 15, and usage = 56, your program should print out something similar to the following.
    // 15 days used, 15 days remaining
    // Average daily use: 3.333 GB/day
    // You are EXCEEDING your average daily use (3.73 GB/day),
    // continuing this high usage, you'll exceed your data plan by
    // 11.9 GB.
    // To stay below your data plan, use no more than 2.93 GB/day.

    // function MyCellPhonePlan(planLimit, day, dataUsed){
    
    //     let daysAtStartOfPlan = 30;
    //     let daysLeft = daysAtStartOfPlan - day;
    //     let dataLeft = planLimit - dataUsed;
    //     let averageUsageExpected = Math.round((planLimit/30) * 100) / 100;
    //     let userUsageDailyAverage = Math.round((dataUsed / day) * 100) / 100;
    
    //     // days left of plan
    //     console.log(`You have used ${day} days of your ${daysAtStartOfPlan} day plan. You have ${daysLeft} days remaining.`);
        
    //     // daily average expected
    //     console.log(`Your daily average of your 30 day plan should be ${averageUsageExpected} GB's per day`);

    //     // actual daily average
    //     console.log(`Your average daily cellular use is ${userUsageDailyAverage} GB'S per day.`);
        
    //     // if high
    //     if(userUsageDailyAverage > averageUsageExpected){
            
    //         let difference = userUsageDailyAverage - averageUsageExpected;
            
    //         let cost = Math.floor((difference * daysAtStartOfPlan) * 100) / 100;
    //         console.log(`You are EXCEEDING your average daily use. If you continue at this rate of usage you will be over your allotted plan limit by ${cost} GB's`);
    //     }

    //     // if meeting
    //     if(userUsageDailyAverage == averageUsageExpected){
    //         console.log(`You are MEETING your average daily use.`);   
    //     }

    //     // if low
    //     if(userUsageDailyAverage < averageUsageExpected){
    //         console.log(`You are Under your average daily use.`);   
    //     }

    //     // to stay below
    //     let keepAccountCurrent = Math.floor((dataLeft/daysLeft) * 100) / 100;
    //     console.log(`To stay below your data plan, use no more than ${keepAccountCurrent} GB's per day.`);
    // }
    // MyCellPhonePlan(100,15,56);