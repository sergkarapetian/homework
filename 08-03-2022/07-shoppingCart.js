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
        this.cart.push(product)
    }
    removeProduct(product) {
        this.cart.splice((newCart.indexOf(product)), 1)
    }
    totalPrice() {
        let sum = 0;
        //total price
        for (let product of this.cart) {
            sum += product.price;
        }
        //discount 
        if (this.cart.length >= 5) {
            sum -= (sum * 10) / 100
        }
        //every same 4-th product is free
        // let count = {}
        // let duplicatedProds = []

        // for (let product of this.cart) {
        //     duplicatedProds.push(product.name)
        // }
        // duplicatedProds.forEach(product => {
        //     count[product] = (count[product] || 0) + 1
        // })
        // for (let values of count) {
        //     if (object[values] < 3) {
        //         delete count[values]
        //     }
        // }
        return sum
    }
    // replace(productName, replacementProduct) {

    // }
}

let tomato = new Product("Tomato", "Vegetable", 500);
let potato = new Product("Potato", "Vegetable", 300);
let grape = new Product("Grape", "Fruit", 700);
let cocnut = new Product("Coconut", "Drupe", 1200);

let newCart = new ShoppingCart();
newCart.addProduct(tomato);
newCart.addProduct(potato);
newCart.addProduct(grape);
newCart.addProduct(grape);
newCart.addProduct(cocnut);
console.log();

