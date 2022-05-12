let html = "<ol>";
let alumnos = [];


function AccesoAPI(){
    const url = "http://localhost:3005/alumnos";
    let xhttp = new XMLHttpRequest(); // Objeto para hacer una llamada XHR
    let body = document.getElementById("body");

    xhttp.open('GET', url); 

    xhttp.setRequestHeader('Accept', 'application/json');
    // Se delega ele vento onreadystatechange
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.response);

            alumnos = data.alumnos;
            alumnos.forEach(alumno => {
                html += `<li><strong>Nombre:</strong> ${alumno.name} <strong>Apellido:</strong> ${alumno.apellido} <strong>Ciudad:</strong> ${alumno.ciudad}</li>`;
            });
            html+="</ol>";

            body.innerHTML = html;
        }
        if (this.readyState == 4 && this.status == 404) {
            console.log("No hay alumnos en la base de datos...");
        }
    }
    xhttp.send();
}