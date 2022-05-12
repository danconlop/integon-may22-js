class Empleado{
    public nombre:string;
    private telefono:string;

    constructor(nombre:string, telefono:string){
        this.nombre = nombre;
        this.telefono = telefono;
    }
    getNombre(){
        return `El nombre del empleado es: ${this.nombre}`;
    }
    
    getTelefono(){
        return this.telefono;
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }

    setTelefono(telefono:string){
        this.telefono=telefono;
    }
}

class Manager extends Empleado{
    private noEmpleadosACargo:number;
    
    constructor(nombre:string, telefono:string, numero:number){
        super(nombre,telefono);
        this.noEmpleadosACargo=numero;    
    }

    getNoEmpleadosACargo(){
        return this.noEmpleadosACargo;
    }

    setNoEmpleadosACargo(numero:number){
        this.noEmpleadosACargo = numero;
    }

    
}

let empleado1=new Empleado("Juan Perez", "1234567890");
console.log(empleado1.getNombre());
console.log(empleado1.getTelefono());

let manager1=new Manager("Wilson Garcia", "123456789", 30);
