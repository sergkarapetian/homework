let LeCalandreMenu = [
    {
        name: "Kopi Luwak coffee",
        type: "drink",
        price: 17000
    },
    {
        name: "Iberico ham",
        type: "food",
        price: 53000
    },
    {
        name: "Salvatore's Legacy",
        type: "drink",
        price: 235000
    },
    {
        name: "Caviar",
        type: "food",
        price: 60000
    },
    {
        name: "Oysters",
        type: "food",
        price: 75000
    },
    {
        name: "White Truffle",
        type: "food",
        price: 118000
    },
    {
        name: "Saffron",
        type: "food",
        price: 95000
    },
    {
        name: "Water from Alps",
        type: "drink",
        price: 3500
    },
    {
        name: "Urban Remedy",
        type: "drink",
        price: 90000
    },
    {
        name: "Organic Berry Tea",
        type: "drink",
        price: 19500
    },
    {
        name: "Armand de Brignac Rose",
        type: "drink",
        price: 650000
    },
    {
        name: "Moet & Chandon Imperial",
        type: "drink",
        price: 505000
    },
    {
        name: "Armand de Brignac Rose",
        type: "drink",
        price: 650000
    }
]

class Cafe {
    constructor(name = "coffeeShop", menu = [], orders = []) {
        this.name = name;
        this.menu = menu;
        this.orders = orders;
    }
    addOrder(order) {
        for (let items of this.menu) {
            if (order === items.name) {
                return this.orders.push(order);
            }
        }
        return "This item is currently unavailable!";
    }
    fulfillOrder() {
        if (this.orders.length > 0) {
            let order = this.orders.splice(0, 1)
            return `The ${order} is ready!`
        } else {
            return "All orders have been fulfilled!"
        }
    }
    listOrders() {
        return this.orders;
    }
    dueAmount() {
        let amount = 0;
        for (let order of this.orders) {
            for (let items of this.menu) {
                if (order === items.name) {
                    amount += items.price
                }
            }
        }
        return amount;
    }
    cheapestItem() {
        let min = this.menu[0].price
        for (let items of this.menu) {
            if (items.price < min) {
                min = items.name
            }
        }
        return min
    }
    drinksOnly() {
        let drinksArr = [];
        for (let items of this.menu) {
            if (items.type === "drink") {
                drinksArr.push(items.name)
            }
        }
        return drinksArr;
    }
    foodOnly() {
        let foodArr = [];
        for (let items of this.menu) {
            if (items.type === "food") {
                foodArr.push(items.name)
            }
        }
        return foodArr;
    }
}


let LeCalandre = new Cafe("CoffeeStar", LeCalandreMenu)
LeCalandre.addOrder("Armand de Brignac Rose")
LeCalandre.addOrder("Caviar")
LeCalandre.addOrder("Saffron")
LeCalandre.addOrder("Water from Alps")
LeCalandre.addOrder("Kopi Luwak coffee")
console.log(LeCalandre.listOrders())
console.log(LeCalandre.dueAmount())
console.log(LeCalandre.fulfillOrder())
console.log(LeCalandre.fulfillOrder())
console.log(LeCalandre.fulfillOrder())
console.log(LeCalandre.fulfillOrder())
console.log(LeCalandre.cheapestItem())
console.log(LeCalandre.drinksOnly())
console.log(LeCalandre.foodOnly())

