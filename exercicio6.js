// 
// You could simply write
//
//     promise.catch(function (err) {
//       console.error('THERE IS AN ERROR!!!');
//       console.error(err.message);
//     });
//
// This notation also has the benefit of making the easier to understand for
// people who do not speak Promises yet, since it is fairly obvious to everyone
// who has done JavaScript programming to understand what catch means.
//
// The second and third are Promise.resolve and Promise.reject. The code
// examples below will tell you exactly what they do:
//
//     // The way you have learned: create promise through the constructor.
//
//     var promise = new Promise(function (fulfill, reject) {
//       fulfill('SECRET VALUE');
//     });
//
//     // Introducing: Promise.resolve
//     // It does the exact same thing as above:
//
//     var promise = Promise.resolve('SECRET VALUE');
//
//
//     // Likewise...
//
//     var promise = new Promise(function (fulfill, reject) {
//       reject(new Error('SECRET VALUE'));
//     });
//
//     var promise = Promise.reject(new Error('SECRET VALUE'));
//
// ## Task
//
// We don’t have any specific task we’d like to assign to you for this lesson.
// Feel free to explore all three functions at your own pace. When you are
// preparing to submit though, make sure you are using at least catch and one
// of Promise.resolve and Promise.reject ☺
//
//
//  » To print these instructions again, run: promise-it-wont-hurt print
//  » To execute your program in a test environment, run: promise-it-wont-hurt run program.js
//  » To verify your program, run: promise-it-wont-hurt verify program.js
//  » For help run: promise-it-wont-hurt help



'use strict';

var promise = Promise.reject(new Error("mensagem de erro fake"));

promise.catch(
  err => {
    console.log(err.message);
  }
);