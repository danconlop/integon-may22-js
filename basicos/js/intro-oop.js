/* Totas las caracteristicas de un Animal relevantes para nuestro sistema
se encapsulan en una clase que abstrae dichas caracteristicas
*/
class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    consultaDetalles() {
        return (`El nombre del animal es ${this.nombre} y su tipo es: ${this.tipo}`);
    }
}

// Se isntancia la clase Animal y se crea un objeto de este tipo
let animal1 = new Animal("hipopotamo", "mamifero");
let animal2 = new Animal("pelicano", "ave");

// console.log(animal1.consultaDetalles());
// console.log(animal2.consultaDetalles());


function imprimeAnimal(animal) {
    try {
        console.log(animal.consultaDetalles());
    }
    catch (ex) {
        console.log("Se recibió un objeto que no es animal...");
    }
}

imprimeAnimal(animal1);
imprimeAnimal(animal2);

class Mamifero extends Animal {
    constructor(nombre, tipo, especial){
        super(nombre, tipo);
        this.especial = especial;
    }
    consultaDetalles() {
        return (`El nombre del animal es ${this.nombre} y su tipo es: ${this.tipo} el campo especial es ${this.especial}`);
    }
}

class Oviparo extends Animal {

}

let mamifero1 = new Mamifero("Toro","mamifero", "especial1");
console.log(mamifero1.consultaDetalles());