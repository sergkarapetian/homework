// Person
// Bucket
// FlowerShop

// function Person(name, gender) {
//     this.name = name;
//     this.gender = gender;
//     this.flower = null;

//     this.buyFlower = function (flower) {
//         this.takeFlower(flower);
//     }

//     this.giveFlower = function (flower) {
//         const gift = this.flower;
//         this.flower = null;
//         return flower;
//     };
// };

// function Flower(type, color) {
//     this.type = type;
//     this.color = color;
// };

// function FlowerShop() {
//     this.flowers = [
//         new Flower("tulip", "red"),
//         new Flower("rose", "red"),
//         new Flower("rose", "yellow")
//     ];

//     this.sellFlower = function () {
//         return this.flowers.pop();
//     }
// };

// const floweShop = new FlowerShop();
// console.log(...flowerShop.flowers);
// console.log(flowerShop.sellFlower());
// console.log(flowerShop.flowers);


// const boy = new Person("John", "male");
// console.log(boy);
// const girl = new Person("Jane", "female");
// console.log(girl);

//Cnstructor
// function Person(name) {
//     this.name = name;
//     this.friendsArr = [];

//     this.addFriend = function (newFriend) {
//         this.friendsArr.push(newFriend);
//     }
// }

// const john = new Person("Jane");
// const jane = new Person("Emily");

// john.addFriend(jane)
// console.log(john)



// //Constructor
// function addFriend(newFriendsName) {
// this["new friend"] = newFriendsName;
// };

// function Person(name){
//     this.Person = name;
// }

// let Jane = new Person("Jane");
// Jane = new addFriend("Emilia");

// // Adding a new object 


// console.log(Jane);

// function Person(name) {
//     this.friends = [];
//     this.name = name;
   
//     this.addFriend = function (name) {
//         if (this.friends.some[name]) {
//            return console.log(name + "is already your friend");
//         }

//         else {
//             this.friends.push(name);
//             return console.log(this.friends);
//         }
//     }
//     return name.friends;
// };

// let john = new Person("John");
// let ann = new Person("Ann");
// john.addFriend('Ann');
// console.log()

