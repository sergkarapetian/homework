// 1) Ինչ կտպվի ծրագրի աշխատանքից հետո, բացատրեք ինչու

// const foo = () => console.log(this.name);
// // const foo = function goo(){
// //     console.log(this.name); }

// const user = {
//    name: 'Suren',
//    foo,
//  foo: () => console.log(this.name)
// }

// user.foo()


// 2) Ինչ կտպվի ծրագրի աշխատանքից հետո, բացատրեք ինչու

// const obj = {
//    bar : function () {
//        return () => this;
//    },
//    name: "Suren"
// };

// console.log(obj.bar()());


// 3) Ինչ կտպվի ծրագրի աշխատանքից հետո, բացատրեք ինչու

// const obj = {
//    age: 24,
//    foo: function () {
//        let self = this;
//        ((num) => {
//            self.age = num;
//        })(17);
//        console.log(this.age);
//    }
// }


// obj.foo();

// 4) Ինչ կտպվի ծրագրի աշխատանքից հետո, բացատրեք ինչու

// const obj = {
//    a: 777,
//    foo
// }

// function foo() {
//    console.log(this.a)
// }

// obj.foo()


// 5) Ինչ կտպվի ծրագրի աշխատանքից հետո, բացատրեք ինչու

// const obj = {
//    age: 22,
//    showAge() {
//        console.log(this.age)
//        const arrowAge = () => {
//            console.log(this.age)
//        }
//        arrowAge() //22
//    },
//    showArrowAge: () => {
//        console.log(this.age)
//    }
// }

// obj.showAge()
// obj.showArrowAge()



// 6) Ինչ կտպվի ծրագրի աշխատանքից հետո

// function foo (fn) {
//    fn(this)
// }

// function logger(arg) {
//    console.log(arg)
// }

// const obj = {
//    word: 'hello',
//    foo,
// }

// obj.foo(logger);


// 7) Ինչ կտպվի ծրագրի աշխատանքից հետո, բացատրեք ինչու

// let foo = function () {
//    this.x = 5;
//    (function () {
//       this.x = 3;
//    })();
//    console.log(this.x);
// };

// const obj = {
//    x: 4,
//    logger: function () {
//        console.log(this.x);
//    }
// };

// foo();
// new foo(); //console.log(new foo())
// obj.logger();
// new obj.logger();


// const checkKnow = {
//     surname: 'surname',
//     name: 'checkKnow',
//     foo: {
//         name: 'foo',
//         logName(){
//             console.log(this.surname);
//         }
//     },

//     boo(){
//         const obj = {
//             name: 'boo method',
//             check: () => {
//                 console.log(this.name);
//             }
//         }
//         obj.check();
//     }
// }
//////////////////////////////////////////////////////////////////////////////
function Stanok() {
this.name = 'Jhon';
this.surname = 'Smith'
}

let Jhon = new Stanok()
console.log(Jhon);
////////////////////////////////////////////////////////////////////////
function StanokArg(name, surname, age) {
    this.name = name;
    this.surname = surname,
    this.age = age;
    }
    
    let Jane = new StanokArg('Jane', 'Black', 37)
    console.log(Jane);
///////////////////////////////////////////////////////////////////////

function StanokBind(name, surname, age) {
    this.name = name;
    this.surname = surname,
    this.age = age;
    }

   let x = StanokArg.bind('Janet', 'Aggap', 39);




