
class Player{
    constructor(name, position, yearOfBirth ){
        this.name = name;
        this.position = position;
        this.year = year;
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

// Array of objects