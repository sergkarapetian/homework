// class Character {
//     constructor(name, type, health = 1, level = 100, attack, protection) {
//         this.name = name;
//         this.type = type;
//         this.health = health; //standard of living
//         this.level = level; //character level
//         this.attack = attack;
//         this.defense = protection;
//     }
// }

// class Bowerman extends Character { }
// class Swordsman extends Character { }
// class Magician extends Character { }
// class Daemon extends Character { }
// class Undead extends Character { }
// class Zombie extends Character {
//     constructor(name, type, health, level) {
//        super(name, type, health, level)
//        this.attack = 25
//        this.defense = 25
//     }
// }

// let a = new Zombie("Valod", "aasgasg")

// console.log(a)




class Product {
    constructor(name, type, price) {
        this.name = name;
        this.type = type;
        this.price = price;
    }
}

class ShoppingCart {
    constructor(cart = []) {
        this.cart = cart
    }
    addProduct(product) {
        product.count = 1
        this.cart.push(product)
    }
    totalPrice() {
        for (let product of this.cart) {
            if (product.name) {
                let sum = product.count
                product.name = sum
            }
        }
    }
}

let tomato = new Product("Tomato", "Vegetable", 500);
let potato = new Product("Potato", "Vegetable", 300);
let grape = new Product("Grape", "Fruit", 700);
let cocnut = new Product("Coconut", "drupe", 1200);

let newCart = new ShoppingCart();
newCart.addProduct(tomato);
newCart.addProduct(tomato);
newCart.addProduct(tomato);
newCart.addProduct(tomato);
newCart.addProduct(potato);
newCart.addProduct(grape);
newCart.addProduct(cocnut);
newCart.totalPrice()
console.log(newCart);



