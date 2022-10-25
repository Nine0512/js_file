// alert("Hello World");
// console.log("Hello world");
// document.getElementById("main").innerHTML = '<h1>Hello World</h1>';
// document.write("<h1>Hello World</h1>");

// function add (n1, n2) {
//     return n1+n2;
// }

// function minus (n1, n2) {
//     return n1-n2;
// }

// let sum = add;
// let subtract = minus;

// console.log(add(1,2));
// console.log(sum(2,3));
// console.log(typeof sum);

// console.log(minus(3,2));
// console.log(subtract(4,3));
// console.log(typeof subtract);

// 2

// function cal(n1, n2, func){
//     return func(n1, n2);
// }

// console.log(cal(1,2,minus));

// function sayGoodbye (){
//     return 'Say Good Bye';
// }

// function doSomerthing (){
//     return sayGoodbye;
// }

// let doIt = doSomerthing();

// console.log(doIt());

// console.log("hello");
// let num = 0;
// //await
// setTimeout(function(){
//     num++
//     console.log(`${num} in setTimeout`);
// },5000);
// console.log(await `${num} Ending`);

// var num1 = 1.2;
// var num2 = 22;

// console.log(typeof num1);
// console.log(typeof num2);

// var str = 'Hello';

// console.log(typeof str);

// let a = "\u4012";
// console.log(a)

// let b = 123n;

// console.log(typeof b);

// let c = Symbol('Hello');
// console.log(typeof c);

// let val;
// console.log(val);
// console.log(typeof val);

// let val1 = null;
// console.log(val1);
// console.log(typeof val1);

// let str = 'hello';
// str.toUpperCase();
// console.log(str);

// let num = 1;


// for( let i = 0; i < 10; i++){
//     console.log(i);
// }

//sad emoji icon in let
// let sad = '\u{1F61E}';

// console.log(`I'm sad${sad}`);

//implicit conversion
// let num = 1;
// let str = '1';

// console.log(num + str);
// console.log(typeof num + typeof str);

//check is array is empty with if else
// let arr = [];
// if(arr.length > 0){
//     console.log('Array is not empty');
// }
// else{
//     console.log('Array is empty');
// }

// let rand = Math.floor(Math.random() * 10);
// let rand2 = Math.floor(Math.random() * (36-1+1)+1);

// console.log(rand2);

// const students = {
//     name: 'John',
//     age: 30,
//     isMarried: false
// }

// console.log(students?.dogname);

// let item = [1,2,3,4,5];
// let varitem = item[0]??'Not found';
// console.log(varitem);



// function getTitle(sex){
//     let lowersex = (sex === undefined ? sex : sex.toLowerCase())
//     if(lowersex === 'male'){
//         console.log('Mr')
//     }else if(lowersex === 'female'){
//         console.log('Ms')
//     }else if(lowersex === undefined){
//         console.log('N/A')
//     }

    // switch(sex){
    //     case 'male':
    //         console.log('Mr')
    //         break;
    //     case 'female':
    //         console.log('Ms')
    //         break;
    //     default :
    //         console.log('N/A')
    // }
// }
// getTitle('MALE');
// getTitle('male');
// getTitle('FEmale');
// getTitle('male');
// getTitle('female');
// getTitle();

// let arr1 = [1,2,3]
// let arr2 = [1,2,3]
// console.log(arr1 === arr2)
// let arr3 = arr1
// console.log(arr3 === arr1)
// console.log(arr3 === arr2)


// function calculateBMI(weight, height) {
//     //code here
//     return BMI = weight / (height * height)
//   }
//   function getBMIMeaning(weight, height) {
//     //code here
//     let BMI = calculateBMI(weight, height)
//     // - BMI < 18.5 จะแสดงข้อความ "Underweight"
//     // - BMI อยู่ในช่วง 18.5 -24.9 จะแสดงข้อความ "Normal weight"
//     // - BMI > 25.0 จะแสดงข้อความ "Overweight"
//     if(BMI < 18.5) 
//       console.log( "Underweight")
//     else if(BMI >= 18.5 && BMI <= 24.9)
//       console.log( "Normal weight")
//     else if (BMI > 25.0)
//       console.log( "Overweight")
//   }
  
//   getBMIMeaning(65, 1.8)
//   getBMIMeaning(80, 1.7)
//   getBMIMeaning(44, 1.6)

// function fillStartWord(startWord, word) {
//     //code here
//     if (word.includes(startWord)) {
//       return word
//     } else if (word === undefined || word === null) {
//       return undefined
//     } else {
//       return startWord + word
//     }
//   }

//     console.log(fillStartWord('Hello', 'World'))

// function minMedMax(n1, n2, n3) {
//     //code here
//     let arr = [n1,n2,n3]
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     let storing = {
//         min : arr[0],
//         mid : arr[1],
//         max : arr[2]
//     }
//     return storing
    
//   }

// minMedMax(1,2,3)
// minMedMax(2,5,1)
// minMedMax(4,3,2)
// minMedMax(4,2,6)
// minMedMax(4,7,5)
// console.log(minMedMax(5,1,1))
// console.log(minMedMax(5,2,5))
// console.log(minMedMax(5,1,4))
// console.log(minMedMax(5,17,41))
// console.log(minMedMax(5,13,1))
// console.log(minMedMax(5,2,41))

// const { template } = require('@babel/core')

// function getMaxLengthString(arrayOfString) {
//     //code here
//     let ans
//     if(arrayOfString == null || undefined){
//       return undefined;
//     }else {
//       let text = []
      
//       let arrayOfStringlong = arrayOfString[0].length
      
//       for (let i = 0; i < arrayOfString.length; i++){
//         let max = arrayOfString[i].length
//          if(max > arrayOfStringlong){
//           ans = arrayOfString[i]
//           arrayOfStringlong = arrayOfString[i].length
//         //   ans = arrayOfString[i]
//          }
//       }
//       for(i = 0; i < arrayOfString.length;i++){
//         if (arrayOfString[i].length == arrayOfStringlong){
//             text.push(arrayOfString[i])
//         }
//       }
      
//     }
//     return ans
//   }
  // module.exports = getMaxLengthString
  
  // console.log(getMaxLengthString(['hello', 'hi', 'hey','heeee']))