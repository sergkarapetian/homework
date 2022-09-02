class Character {
    constructor(name, type, health = 1, level = 100, attack, protection) {
        if ((typeof name === typeof String()) && ((name.length > 1) && (name.length < 9))) {
            this.name = name;
        } else { throw new Error("Invalid name") }

        if (type === "Bowerman" || "Swordsman" || "Magician" || "Daemon" || "Undead" || "Zombie") {
            this.type = type;
        } else { throw new Error("Invalid type") }
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defense = protection;
    }
    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.health = 100;
            this.attack += ((this.attack * 20) / 100)
            this.defense += ((this.defense * 20) / 100)
        } else {
            throw new Error("you cannot increase the level of the deceased")
        }
    }
    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defense / 100)
        } else {
            console.log(`Fatality`)
        }
    }
}

class Bowerman extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level)
        this.attack = 25;
        this.defense = 25;
    }
}
class Swordsman extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level)
        this.attack = 40;
        this.defense = 10;
    }
}
class Magician extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level)
        this.attack = 10;
        this.defense = 40;
    }
}
class Daemon extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level)
        this.attack = 10;
        this.defense = 40;
    }
}
class Undead extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level)
        this.attack = 25;
        this.defense = 25;
    }
}
class Zombie extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level)
        this.attack = 40;
        this.defense = 10;
    }

}

let sword = new Bowerman("Sword", "Bowerman");
let kahoo = new Swordsman("Kahoo", "Swordsman");
let geralt = new Magician("Geralt", "Magician");
let abadon = new Daemon("Abadon", "Daemon");
let jason = new Undead("Jason", "Undead");
let shaun = new Zombie("Shaun", "Zombie");

console.log(sword);
console.log(kahoo);
console.log(geralt);
console.log(abadon);
jason.levelUp()
console.log(jason);

shaun.damage(3);
shaun.damage(1)
