function AccesoAPI() {
    const url = "http://localhost:3005/alumnos";
    let xhttp = new XMLHttpRequest(); // Objeto para hacer una llamada XHR
    let body = document.getElementById("body");
    let html = "<ol>";

    xhttp.open('GET', url);

    xhttp.setRequestHeader('Accept', 'application/json');
    // Se delega ele vento onreadystatechange
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.response);

            data.alumnos.forEach(element => {
                html += `<li>
                            <strong>Nombre:</strong> ${element.name} <strong>Apellido:</strong> ${element.apellido} <strong>Ciudad:</strong> ${element.ciudad}
                        </li>`;
            })
            html += "</ol>";

            body.innerHTML = html;
        }
        if (this.readyState == 4 && this.status == 404) {
            console.log("No hay alumnos en la base de datos...");
        }
    }
    xhttp.send();
}