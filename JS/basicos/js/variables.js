let datoGeneral = 100
calculo1();
calculo2()
console.log(datoGeneral);

// var -> la variable está disponible en un scope más amplio
// let -> el scope es más cerrado (solamente vive dentro del bloque en el que se está utilizando)
// no se puede redeclarar, debe ser declarada antes de usarse, tiene un block

function calculo1(){
    let datoGeneral = 150;
    datoGeneral += 5;
    if (datoGeneral > 100){
        let otraVariable = 200;
        console.log(`El valor de la otra variable es ${otraVariable}`);
    }
    //console.log(`El valor de la otra variable es ${otraVariable}`);
}

function calculo2(){
    datoGeneral += 10;
}