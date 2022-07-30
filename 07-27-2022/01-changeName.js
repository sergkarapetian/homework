class NameChanger {
    setName(givenName) {
        this.name = givenName;
    }
    getName() {
        return this.name;
    }
};

const obj = new NameChanger;
obj.setName("Sergey");
console.log(obj.getName());
