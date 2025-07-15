/*
🌟 Exercise 5 : Dog class
Instructions

Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};

    Analyze the options below. Which constructor will successfully extend the Dog class?

  // 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};


  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};


  // 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};


  // 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};

*/
// the correct answer is option 2
// because it correctly extends the Dog class by calling the parent constructor with super(name) and initializes the size property