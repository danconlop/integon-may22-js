const fetch = require('node-fetch');

function demoFetchAPI(){
    let url = "http://localhost:3005/authors";

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let autores = data.authors;
            
            autores.forEach(autor => {
                console.log(autor.nombre);
            });
        })
        .catch(function(error){
            console.log("El servidor no está disponible");
        });
}

demoFetchAPI();