const human = {
    name: "John",

    sayName: function () {
      console.log(this.name);
    }
  };

  human.sayName();

  const developer = Object.create(human);
  developer.codding = function () {
    console.log("developer is codding");
  };
  developer.name = "developer";
  developer.codding();
  developer.sayName();

