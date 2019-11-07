const getfirstname = fullname => fullname.split(" ")[0];

console.log(getfirstname("Mike Smith"));

const user = {
  firstname: "suvarjit",
  cities: ["kolkata", "Mumbay", "Dilhi"],
  getcitilocation() {
    return this.cities.map(city => this.firstname + " has lived in " + city);
  }
};
console.log(user.getcitilocation());

const multyplier = {
  multilpyby: 2,
  number: [1, 2, 3],
  multiply() {
    return this.number.map(number => this.multilpyby * number);
  }
};

console.log(multyplier.multiply());
