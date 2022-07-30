// Using the constructor function, create an object and methods to support the following functionality 
function ProfileInfo() {
    this._username;
    this._email;
    this._adress;
    this.setUsername = function (username) {
        return this._username = username;
    }
    this.getUsername = function () {
        console.log(this._username);
    }
    this.setEmail = function (email) {
        return this._email = email
    }
    this.getEmail = function () {
        console.log(this._email)
    }
    this.setAddress = function (adress) {
        return this._adress = adress
    }
    this.getAdress = function () {
        console.log(this._adress)
    }
}

const profileInfo = new ProfileInfo();
profileInfo.setUsername("username");
profileInfo.getUsername();
profileInfo.setEmail("abc@example.com");
profileInfo.getEmail()
profileInfo.setAddress("The user address");
profileInfo.getAdress()


function User() {
    this.name;
    this.age;
    this.obj;
    this.setName = function(name){
        this.name = name
    }
    this.getName = function(){
         console.log(this.name)
    }
    this.setAge = function(age){
        this.age = age
    }
    this.getAge = function(){
         console.log(this.age)
    }
    this.setProfileInfo = function(obj){
        this.obj = obj
    }
    this.getProfileInfo = function(){
         console.log(this.obj)
    }
}
const user = new User();
user.setName("John");
user.getName();  //John
user.setAge(63);
user.getAge(); //63
user.setProfileInfo(new ProfileInfo());
user.getProfileInfo(); //function ProfileInfo()
