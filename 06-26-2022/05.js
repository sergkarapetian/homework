// Create a function that accepts 2 arrays of words and returns the common words from each.
// Գրել ֆունկցիա որը ստանում է 2 զանգված և վերադարձնում է նրանց ընդհանուր տարրերը։
// Օրինակ։ 
// arr = ["dog", "cat", "parrot"] 
// arr ["lizard", "rat", "cat"] 
// // Պատասխան։ ["cat"]

// function RepeatedWords(arr1, arr2) {
//     let commonWord = "";
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {

//             if (arr1[i] === arr2[j]) {
//                 commonWord += arr1[i] + " "
//             }
//         }
//     }
//     return commonWord;
// };

// const firstArray = ["dog", "cat", "parrot", "duck"];
// const secondArray = ["duck", "rat", "cat", "lizard"];
// // console.log(RepeatedWords(firstArray, secondArray));

// // let arr = [...new Set(firstArray.concat(secondArray))]
// // console.log(arr)

// function getNewArr(arr1, arr2) {
//     let obj = {};
//     let array = [];
//     let arr = arr1.concat(arr2)
//     for (let element of arr) {
//         if (obj[element]) {
//             obj[element]++;
//         }
//         else {
//             obj[element] = 1;
//         }
//     }
//     for (let key in obj) {
//         if (obj[key] > 1) {
//             array.push(key)
//         }
//     }
//     return array
// }

// console.log(getNewArr(firstArray, secondArray))
// const arr = [
//     {
//         name: "John",
//         gender: "male"
//     },
//     {
//         name: "Jane",
//         gender: "female"
//     },
//     {
//         name: "Bob",
//         gender: "male"
//     },
//     {
//         name: "Ronaldo",
//         gender: "male"
//     },
//     {
//         name: "Sarah",
//         gender: "female"
//     }
// ];


// function createArrInsideObj(arr) {
//     let obj = {
//         men: [],
//         women: []
//     };
//     arr.filter((human) => {
//         if (human.gender === "female") {
//             (obj.women).push(human.name)
//         }
//         else if (human.gender === "male") {
//             (obj.men).push(human.name)
//         }
//         return obj;
//     })
//     return obj;
// }

// console.log(createArrInsideObj(arr))

// let arr = [1, 2, 3, 4]

// function sqerElements(arr) {
//     let newArr = arr.map((item) => {
//        item *= item;
//        return item;
//     })
//     return newArr;
// }

// console.log(sqerElements(arr));

// const arr = [
//     {
//         id: 1,
//         name: "John"
//     },
//     {
//         id: 2,
//         name: "Jane"
//     },
//     {
//         id: 3,
//         name: "Vandam"
//     },
//     {
//         id: 4,
//         name: "Betmen"
//     }
// ];

// function createArr(arr) {
//     let newArr = arr.map((elements) => {
//         return elements.id
//     })
//     return newArr;
// }

// console.log(createArr(arr));

// function Counter(element) {
//     this.element = element;
//     this.increment = function (element) {
//         return this.element += 1
//     }
//     this.decrement = function (element) {
//         return this.element -= 1
//     }
//     this.getCount = function (element) {
//         return this.element
//     }
// };

// let counter = new Counter(10);

// counter.increment();
// counter.decrement();
// counter.decrement();
// counter.decrement();
// counter.decrement();

// const count = counter.getCount();

// console.log(count);

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.setSalary = function (n) {
//         this.salary = n;
//     }
//     this.getSalary = function(){
//         return this.salary;
//     }
// }

// const user = new User("John", 23);
// user.setSalary(1500);
// console.log(user.getSalary());
// console.log(3)

// let obj = new Object();
// obj.age = 25;
// // console.log(Object.getOwnPropertyDescriptors(obj))
// Object.defineProperty(obj, 'age', {writable: true, configurable: true, enumerable: true});
// console.log(Object.getOwnPropertyDescriptors(obj))

// let a = 0, b = 'fasfasf';
// console.log(Boolean(a))

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let newArr = arr.filter((item, index, arr)=> item%2 === 0)

// console.log(newArr);

// let persons = [
//     { name: 'Ani', department: 'C' },
//     { name: 'Gor', department: 'A' },
//     { name: 'Aram', department: 'B' },
//     { name: 'Sona', department: 'C' },
//     { name: 'Gago', department: 'A' },
//     { name: 'Vardges', department: 'B' },
//     { name: 'Karen', department: 'C' }
// ]

// let mapped = persons.reduce((obj, item) => {
//     obj[item.department] ? obj[item.department].push(item) : obj[item.department] = [item];
//     return obj
// }, {})

// console.log(mapped);

// let arr = [
// 1, 2, 3, 4, 
// [5, 6, 7, 8,
//     [9, 10, 11, 12]]
// ]

// let floArayik = arr.flat(2)
// console.log(floArayik);

// let obj = {
//     name: 'James',
//     info: {
//         meal: {
//             today: "Borsh"
//         }
//     }
// }
 
// let { info } = obj;
// let { info: { meal: { today } } } = obj;
// console.log(info);