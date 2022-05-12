class Humans {
    constructor(name, age, gender){
        this.name=name,
        this.age=age,
        this.gender=gender
    }

    info(){
        return console.log(this);
    }
}



let Human1 = new Humans('Gaurav', 24, "Male");
let Human2 = new Humans('Nishi', 23, "Female");

Human1.info();
Human2.info();