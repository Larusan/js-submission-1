//Question 07

function createPerson (name, age){
    return {
        name: name,
        age: age,
        greet: function () {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }
}

const person = createPerson("Larusan", 24);
person.greet();
