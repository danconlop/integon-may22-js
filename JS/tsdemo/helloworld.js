let arregloRegistros = [];
let mensaje = "Hola Mundo";
let dato = 5;
let encendido = false;
let otracadena = "";
let ejemplo1, ejemplo2, ejemplo3;
ejemplo1 = [10, 'cadena1', true];
ejemplo2 = [10, 'cadena2', false];
ejemplo3 = [10, 'cadena3', true];
arregloRegistros.push(ejemplo1);
arregloRegistros.push(ejemplo2);
arregloRegistros.push(ejemplo3);
function imprimirRegistros(arreglo) {
    for (let registro of arreglo) {
        console.log(registro);
    }
}
imprimirRegistros(arregloRegistros);
//# sourceMappingURL=helloworld.js.map