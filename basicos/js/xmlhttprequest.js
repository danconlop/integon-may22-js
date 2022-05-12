global.XMLHttpRequest = require('xhr2');

function AccesoAPI(){
    console.log("LLmando a SWAPI");
    //const url = "https://swapi.dev/api/planets/100";
    const url = "https://swapi.dev/api/planets/100";
    let xhttp = new XMLHttpRequest(); // Objeto para hacer una llamada XHR

    xhttp.open('GET', url); 

    xhttp.setRequestHeader('Accept', 'application/json');
    // Se delega ele vento onreadystatechange
    xhttp.onreadystatechange = function() {
            if(this.readyState == 3){
                console.log("Loading...");
            }
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.response);
          
            console.log(JSON.stringify(data));
            console.log(data.name);
            console.log(data.rotation_period);
        }
        if (this.readyState == 4 && this.status == 404) {
            console.log("ese planeta no existe...");
        }
    }
    xhttp.send();
}

AccesoAPI();