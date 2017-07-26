//a person class
class Person { //the class keyword
  constructor(name) { //a constructor
    this.name = name; //note the use of this
  }
  
  sayHi() { //a function
    console.log('Hi, my name is '+this.name);
  }
}

//a worker class that extends a person class
class Worker extends Person { //the extends keyword
  constructor(name, company) {
    super(name); //calling super...
    
    this.company = company;
  }
  
  whereDoYouWork() {
    console.log('i work at: '+this.company);
  }
}

