type Registro = [number, string, boolean];
let arregloRegistros:Array<Registro>=[];

let mensaje:string ="Hola Mundo";
let dato:number = 5;
let encendido:boolean = false;
let otracadena:string ="";

let ejemplo1:Registro, ejemplo2:Registro, ejemplo3:Registro;

ejemplo1 = [10,'cadena1',true];
ejemplo2 = [10,'cadena2',false];
ejemplo3 = [10,'cadena3',true];

arregloRegistros.push(ejemplo1);
arregloRegistros.push(ejemplo2);
arregloRegistros.push(ejemplo3);

function imprimirRegistros(arreglo:Array<Registro>):void{
    for(let registro of arreglo){
        console.log(registro);
    }
}

imprimirRegistros(arregloRegistros);

/*
console.log(mensaje);
let encabezado = document.createElement("h1");
encabezado.textContent = mensaje;
document.body.appendChild(encabezado);
*/