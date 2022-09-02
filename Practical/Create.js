
let a = {name: "John"};
let b = Object.create(a)
 b.age = 25
let c = Object.create(b, {
    city: {
        writable: true,
        configurable: true,
        enumerable: false,
        value: 'Denver'
    }
})
console.log(c.name)

