// S1Q1
console.log(addNumbers(4,5));

function addNumbers(num1, num2) {
    return num1 + num2;
}



// S1Q2
console.log(compareValues(7,7));

function compareValues(value1, value2) {
    
    if (value1 == value2) {
        return 'equal'
    } else if(value1 === value2){
        return "strictly equal"
    }
    else {
        return 'not equal'
    }
}


// S1Q3
console.log(testCoercion(22,"22"))

function testCoercion(value1 = 0, value2 = "") {
    equality = {
        doubleEquate: value1 == value2,
        tripleEquate: value1 === value2    
        }


    return equality;
}



// S2Q1
class Person {
    constructor(firstName,lastName, age) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    }

    fullName() {
        console.log(this.firstName, this.lastName)
    }

    introduce() {
        console.log("Hello my name is", this.firstName, this.lastName, "I am", this.age, "years old." )
    }
}

const person1 = new Person("John", "Doe", 30);
person1.introduce()
