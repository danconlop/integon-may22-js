class Empleado {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
    getNombre() {
        return `El nombre del empleado es: ${this.nombre}`;
    }
    getTelefono() {
        return this.telefono;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setTelefono(telefono) {
        this.telefono = telefono;
    }
}
class Manager extends Empleado {
    constructor(nombre, telefono, numero) {
        super(nombre, telefono);
        this.noEmpleadosACargo = numero;
    }
    getNoEmpleadosACargo() {
        return this.noEmpleadosACargo;
    }
    setNoEmpleadosACargo(numero) {
        this.noEmpleadosACargo = numero;
    }
}
let empleado1 = new Empleado("Juan Perez", "1234567890");
console.log(empleado1.getNombre());
console.log(empleado1.getTelefono());
let manager1 = new Manager("Wilson Garcia", "123456789", 30);
//# sourceMappingURL=oop.js.map