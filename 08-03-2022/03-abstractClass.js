// Abstract classes are base classes from which other classes may be derived. In other
// words, you can’t create an instance with that class, you can only extend from it.
// Create a class, which will throw an error if you try to create an instance with it.


class Abstract {
    constructor() {
        this.name = "Abstract Class"
        if (this.constructor = Abstract) {
            throw new Error("Hah? Looks like an Error")
        }
    }
}

class ChildAbstract extends Abstract{}
console.log(ChildAbstract)