
class Person{
    constructor(fName, lName){
        this.firstName = fName;
        this.lastName = lName;
    }

    greeting(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }

    static getAddingTwoValue(fNumber, lNumber){
        console.log(fNumber + lNumber); 
    }
}


//sub  class
class Customer extends Person{
    constructor(fName, lName, phone, membership){
        super(fName, lName);
        this.phone = phone;
        this.memberShip = membership;
    }

    getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

Person.getAddingTwoValue(10, 20);
let person1 = new Person("Imran", "Hossain");

Person.getAddingTwoValue(10, 40);

Person.getAddingTwoValue(10, 100);

