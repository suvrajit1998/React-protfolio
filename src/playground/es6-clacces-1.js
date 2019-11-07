class Person {
  constructor(name = "Anonymous", age = 0) {
    (this.name = name), (this.age = age);
  }
  getdescription() {
    return "I am " + this.name + " i am " + this.age + " ! ";
  }
}

const me = new Person("Suvrajit naskar", 22);
console.log(me.getdescription());

const other = new Person("sathi guho", 18);
console.log(other.getdescription());
