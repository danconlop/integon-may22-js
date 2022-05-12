interface IMedioDeTransporte {
    motor:string;
    color:string;

    frenar: () => void;
}

class Automovil implements IMedioDeTransporte {
    public motor:string;
    public color:string;
    constructor(motor:string, color:string) {
        this.motor=motor;
        this.color=color;
    }

    frenar():void{
        console.log("Frenar");
    }
}

class Autobus implements IMedioDeTransporte {
    public motor:string;
    public color:string;
    constructor(motor:string, color:string) {
        this.motor=motor;
        this.color=color;
    }
    frenar():void{
        console.log("Frenar");
    }
}