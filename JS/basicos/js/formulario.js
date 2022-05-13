let registro = [];

function validar(){
    let edad = parseInt(document.getElementById("formEdad").value);
    let nombre = document.getElementById("formNombre").value;
    let ingreso = parseInt(document.getElementById("formIngreso").value);

    if(isNaN(edad)){
        alert("EDAD debe ser un número");
        return;
    }

    if(isNaN(ingreso)){
        alert("INGRESO debe ser un número");
        return; 
    }
    
    registro.push({
        "nombre": nombre,
        "edad": edad,
        "ingreso": ingreso
    });

    registro.forEach(x => console.log(x));
}