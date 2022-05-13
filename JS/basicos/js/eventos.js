function generateUI(){
    // Referencia al elemento con id "contenido"
    let divPrincipal=document.getElementById("contenido");
    // Creación de elementos de tipo botón
    let boton1 = document.createElement("button");    
    let boton2 = document.createElement("button");
    // Configuración de la propiedad innerText de cada botón
    boton1.innerText="Boton1";
    boton2.innerText="Boton2";
    // Se agregan los botones al elemento del que se tiene referencia
    divPrincipal.appendChild(boton1);
    divPrincipal.appendChild(boton2);
    // Se agrega el evento escuchador para que se ejecute cuando se haga clic en los botones
    boton1.addEventListener("click",(e) => {
        console.log("Boton 1 was clicked");
    })

    boton2.addEventListener("click", e => {
        console.log("Boton 2 was clicked");
    })

    boton2.addEventListener("click", clickGeneral);

}

function clickGeneral(){
    alert("click general");
}