let buildings = [];
let policeCars = {}
let ambulanceCars = {}

class City {
    constructor(buildings) {
        this.buildings = buildings;
    }
}
class Building {
    constructor(name) {
        this.name = name
    }
}
class Car {
    constructor(name) {
        this.name = name
    }
}

class Hospital extends Building {
    constructor(name) {
        super(name);
        buildings.push(this.name);
    }
}
class PoliceDepartment extends Building {
    constructor(name) {
        super(name)
        buildings.push(this.name)
    }
}

class PoliceCar extends Car {
    constructor(name) {
        super(name)
        if (policeCars[this.name]) {
            policeCars[this.name] += 1
        } else {
            policeCars[this.name] = 1
        }
    }
}
class AmbulanceCar extends Car {
    constructor(name) {
        super(name)
        if (ambulanceCars[this.name]) {
            ambulanceCars[this.name] += 1
        } else {
            ambulanceCars[this.name] = 1
        }
    }

}

let nairi = new Hospital('Nairi')
let ererbuniHospital = new Hospital("Erebuni Hospital")
let metroPolice = new PoliceDepartment("Metro Police Department")

let dodge1 = new PoliceCar("Dodge Charger SRT")
let dodge2 = new PoliceCar("Dodge Charger SRT")
let dodge3 = new PoliceCar("Dodge Charger SRT")

let cadillac1 = new PoliceCar("Cadillac Escalade")

let mercedes1 = new AmbulanceCar("Mercedes-Benz Vans")
let mercedes2 = new AmbulanceCar("Mercedes-Benz Vans")
let mercedes3 = new AmbulanceCar("Mercedes-Benz Vans")

console.log(ambulanceCars);
console.log(policeCars);
console.log(buildings);