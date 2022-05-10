let numeros = [8,9,12,45];
let condiciones = [true, false, true, true, true, false];

numeros.push(84);

console.log(numeros);
console.log(numeros[0]); // Arrays son zero-based
console.log(numeros[4]); // no existe
console.log(numeros.length);

for(index = 0; index < numeros.length; index++){
    console.log(numeros[index]);
}

numeros.forEach(function(numero){
    console.log(numero);
});

numeros.forEach(x => console.log(x));

condiciones.forEach(x => console.log(x));

condiciones.forEach(function(x){
    console.log(x);
});

let personas =[];

personas.push({
    "nombre":"Juan",
    "apellido":"Perez"
});

personas.push({
    "nombre":"John",
    "apellido":"Doe"
});

personas.push({
    "nombre":"Miguel",
    "apellido":"Suarez",
    "edad":34
});

personas.push({
    "base":45.12,
    "altura": 10.3
});

personas.push(5);

personas.forEach(x => console.log(x));