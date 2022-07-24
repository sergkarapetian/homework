// let drinks = [
//     {
//         name: "lemonade",
//         price: 50
//     },
//     {
//         name: "lime",
//         price: 10
//     }
// ];

// function createPriceList(arr) {
//     let object = {};
//     for (let priceList of arr) {

//         if (object[priceList.name]) {
//             object[priceList.name] += priceList.price;
//         }
//         else {
//             object[priceList.name] = priceList.price;
//         }
//     }
//     return object;
// };

// console.log(createPriceList(drinks));

// ///////////////////////////////////////////////////////////////////////////////////////////

// Dublicate array elements
// function doubleNumbers(arr){
// let result = arr.map((item, index, array) => {
//     return item * 2;
// })
// return result;
//   }

//   console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// ///////////////////////////////////////////////////////////////////////////////////////////

// const payments = [
//   {
//     studentId: 1, // Unique identifier for each student
//     studentName: "John Doe", // Name of the student
//     payedAmount: 1600, // Amount payed with this transaction
//     year: 2020, // The payment year
//   },
//   {
//     studentId: 1, // Unique for each student
//     studentName: "John Doe",
//     payedAmount: 1500,
//     year: 2021
//   },
//   {
//     studentId: 1, // Unique for each student
//     studentName: "John Doe",
//     payedAmount: 1400,
//     year: 2022
//   },
//   {
//     studentId: 1, // Unique for each student
//     studentName: "John Doe",
//     payedAmount: 1300,
//     year: 2023
//   },
//   {
//     studentId: 2, // Unique for each student
//     studentName: "Lu Kang",
//     payedAmount: 1500,
//     year: 2020
//   },
//   {
//     studentId: 2, // Unique for each student
//     studentName: "Lu Kang",
//     payedAmount: 1400,
//     year: 2021
//   },
//   {
//     studentId: 2, // Unique for each student
//     studentName: "Lu Kang",
//     payedAmount: 1300,
//     year: 2023
//   },
//   {
//     studentId: 2, // Unique for each student
//     studentName: "Lu Kang",
//     payedAmount: 1200,
//     year: 2023
//   }
// ];

// let newArr = [];
// function amountOfYear(arr, year) {
//   let object = {};
//   for (let payment of arr) {
//     if (year = payment.year) {
//       object[payment.year] ?
//         object[payment.year] += payment.payedAmount :
//         object[payment.year] = payment.payedAmount;
//         answer = object;
//     }
//       else answer = 'Please type a year';
//   }
//   return answer;
// };
// console.log(amountOfYear(payments, 2021));

//////////////////////////////////////////////////////////////////////////////////////

// let obj1 = {
//   name: "Tom",
//   age: 23
// }

// let obj2 = {
//   name: "Jane",
//   salary: "$2500",
//   position: "Director"
// }

// let obj3 = {
//   name: "Jane",
//   donated: "$5050"
// }

// function marge(...arguments) {
//   let margedObject = {};
//   margedObject = {margedObject, ...arguments};
//   return margedObject;
// }

// console.log(marge(obj1, obj2, obj3));

//////////////////////////////////////////////////////////////////////////////////////

// const payments = [
//   {
//     studentId: 1,
//     studentName: "John Doe",
//     payedAmount: 1600,
//     year: 2020
//   },
//   {
//     studentId: 1,
//     studentName: "John Doe",
//     payedAmount: 1500,
//     year: 2021
//   },
//   {
//     studentId: 1,
//     studentName: "John Doe",
//     payedAmount: 1400,
//     year: 2022
//   },
//   {
//     studentId: 1,
//     studentName: "John Doe",
//     payedAmount: 1300,
//     year: 2023
//   },
//   {
//     studentId: 2,
//     studentName: "Lu Kang",
//     payedAmount: 1500,
//     year: 2020
//   },
//   {
//     studentId: 2,
//     studentName: "Lu Kang",
//     payedAmount: 1400,
//     year: 2021
//   },
//   {
//     studentId: 2,
//     studentName: "Lu Kang",
//     payedAmount: 1300,
//     year: 2023
//   },
//   {
//     studentId: 2,
//     studentName: "Lu Kang",
//     payedAmount: 1200,
//     year: 2023
//   }
// ];

// function allPayments(arr) {
//   let newArr = arr.reduce((lastPayedAmount, item) => {
//     return lastPayedAmount.concat(item.payedAmount);
//   }, []);
//   return newArr;
// };
//   console.log(allPayments(payments));

// function allPayments(arr) {
//   let newArr = arr.reduce((previousValue, currentValue) => {
//     return previousValue.concat(currentValue.payedAmount);
//   }, []);
//   return newArr;
// }
// console.log(allPayments(payments));

// console.log(
//   [1, 2, 3, 4, 5, 6].reduce((a, b) => {
//     return a + b
//   }));

// function getElements(arr) {
//   let result = arr.reduce(function(previousValue, currentValue){
//     return previousValue.concat(currentValue);
//   })
//   return result;
// }

// let array = [
//   [a, b, c],
//   [c, d, e],
//   [d, f, z],
// ]
// console.log(getElements(array));

// Array.prototype.myReduce = function (callBack, initialValue) {
//     const arr = this;
//     let accumulator = initialValue || arr[0];
//     let startFromINdex = initialValue ? 0 : 1;
  
//     for (let i = startFromINdex; i < arr.length; i++) {
//       const item = arr[i];
//       accumulator = callBack(accumulator, item);
//     }
  
//     return accumulator;
//   };
  
//   const sum = ["a", "b", "c", "d", "e"].myReduce(function (acm, item) {
//     return acm + item;
//   });
  
//   console.log(sum);