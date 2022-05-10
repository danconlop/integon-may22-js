

function sumar(num1, num2){
    return num1 + num2;
}

function restar(num1, num2){
    return num1 - num2;
}

function multiplicar(num1, num2){
    return num1 * num2;
}

function dividir(num1, num2){
    return num1 / num2;
}

function ejecutaSuma(){
    let num1 = parseInt(document.getElementById("txtNumero1").value);
    let num2 = parseInt(document.getElementById("txtNumero2").value);
    let suma = sumar(num1, num2);

    console.log("Suma: "+suma);
}

function ejecutaResta(){
    let num1 = parseInt(document.getElementById("txtNumero1").value);
    let num2 = parseInt(document.getElementById("txtNumero2").value);
    let resta = restar(num1, num2);

    console.log("Resta: "+resta);
}

function ejecutaDivision(){
    let num1 = parseInt(document.getElementById("txtNumero1").value);
    let num2 = parseInt(document.getElementById("txtNumero2").value);
    let division = dividir(num1, num2);

    console.log("División: "+division);
}

function ejecutaMultiplicacion(){
    let num1 = parseInt(document.getElementById("txtNumero1").value);
    let num2 = parseInt(document.getElementById("txtNumero2").value);
    let multiplicacion = multiplicar(num1, num2);

    console.log("Multiplicación: "+multiplicacion);
}