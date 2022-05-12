let frmAuthor = document.getElementById("formAuthor");
// Configuración de botones
let btnCancelar = document.getElementById("btnCancelar");
btnCancelar.addEventListener("click", function(){
    if(!frmAuthor.classList.contains("d-none")){
        frmAuthor.classList.add("d-none");
    }
});
let btnAddAuthor = document.getElementById("addAuthor");
btnAddAuthor.addEventListener("click", function(){
    if(frmAuthor.classList.contains("d-none")){
        frmAuthor.classList.remove("d-none");
    }
})


$(document).ready(function () {
    // Get table element by id
    let authorsTable = document.getElementById("authors");
    // Table body element
    let tableBody = document.getElementById("authorsTBody");
    tableBody.innerHTML = "";

    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: 'http://localhost:3005/authors',
        success: function (result) {

            result.authors.forEach(e => {
                let classStatus = e.status == "Online" ? "success" : "secondary";
                // New Row
                let newAuthor = authorsTable.insertRow(-1);

                // Sections
                let sectionName = newAuthor.insertCell(0);
                sectionName.innerHTML = `
                <div class="d-flex px-2 py-1">
                    <div>
                        <img src="../assets/img/${e.foto}" class="avatar avatar-sm me-3" alt="user6">
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">${e.nombre}</h6>
                        <p class="text-xs text-secondary mb-0">${e.correo}</p>
                    </div>
                </div>`;

                let sectionPostition = newAuthor.insertCell(1);
                sectionPostition.innerHTML = `
                    <p class="text-xs font-weight-bold mb-0">${e.puesto}</p>
                    <p class="text-xs text-secondary mb-0">${e.puesto2}</p>
                `;

                let sectionStatus = newAuthor.insertCell(2);
                sectionStatus.innerHTML = `
                    <span class="badge badge-sm bg-gradient-${classStatus}">${e.status}</span>`;
                sectionStatus.className = "align-middle text-center text-sm";

                let sectionEmployed = newAuthor.insertCell(3);
                sectionEmployed.innerHTML = `
                    <span class="text-secondary text-xs font-weight-bold">${e.employed}</span>`;
                sectionEmployed.className = "align-middle text-center";

                let sectionEdit = newAuthor.insertCell(4);
                sectionEdit.innerHTML = `
                <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                    Edit
                </a>`;
                sectionEdit.className = "align-middle";
            })
        }
    });
});

// Variable con los datos del autor
let author;// = new Author("team-2.jpg", "Alejandro Gomez", "agomez@gmail.com", "Manager", "Jr", "Offine", "5/10/2021");
let formFoto, formNombre, formCorreo, formPuesto, formPuesto2, formStatus, formEmployed;
$(document).ready(function () {
    $("#btnGuardar").click(function (e) {
        e.preventDefault();

        // Asignacion de elementos
        formFoto = document.getElementById("foto");
        formNombre = document.getElementById("nombre");
        formCorreo = document.getElementById("correo");
        formPuesto = document.getElementById("puesto");
        formPuesto2 = document.getElementById("puesto2");
        formStatus = document.getElementById("status");
        formEmployed = document.getElementById("employed");

        // Validacion de datos
        if (!$("#foto").val()){
            alert("Ingrese el nombre de la foto");
            $("#foto").focus();
            //formFoto.focus();
            return;
        }
        if (!formNombre.value){
            alert("Ingrese el nombre del empleado");
            formNombre.focus();
            return;
        }
        if (!formCorreo.value){
            alert("Ingrese la dirección de correo");
            formCorreo.focus();
            return;
        }
        if (!formPuesto.value){
            alert("Ingrese el puesto del empleado");
            formPuesto.focus();
            return;
        }
        if (!formPuesto2.value){
            alert("Ingrese la posición del empleado");
            formPuesto2.focus();
            return;
        }
        if (!formStatus.value){
            alert("Ingrese el estatus del empleado");
            formStatus.focus();
            return;
        }
        if (!formEmployed.value){
            alert("Ingrese la fecha de ingreso del empleado");
            formEmployed.focus();
            return;
        }

        author = new Author (
            formFoto.value,
            formNombre.value,
            formCorreo.value,
            formPuesto.value,
            formPuesto2.value,
            formStatus.value,
            formEmployed.value
        );

        $.ajax({
            method: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            url: 'http://localhost:3005/authors',
            data: JSON.stringify({
                "foto": author.foto,
                "nombre": author.nombre,
                "correo": author.correo,
                "puesto": author.puesto,
                "puesto2": author.puesto2,
                "status": author.status,
                "employed": author.employed
            }),
            success: function (result) {
                if(result.ok){
                    addAuthorToTable(author);

                    formFoto.value = "";
                    formNombre.value = "";
                    formCorreo.value = "";
                    formPuesto.value = "";
                    formPuesto2.value = "";
                    formStatus.value = "";
                    formEmployed.value = "";

                    // Ocultar formulario
                    frmAuthor.classList.add("d-none");
                }
            }
        });
    });
});

function addAuthorToTable(Author) {
    // Get table element by id
    let authorsTable = document.getElementById("authors");
    let classStatus = Author.status == "Online" ? "success" : "secondary";
    // New Row
    let newAuthor = authorsTable.insertRow(-1);

    // Sections
    let sectionName = newAuthor.insertCell(0);
    sectionName.innerHTML = `
        <div class="d-flex px-2 py-1">
            <div>
                <img src="../assets/img/${Author.foto}" class="avatar avatar-sm me-3" alt="user6">
            </div>
            <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-sm">${Author.nombre}</h6>
                <p class="text-xs text-secondary mb-0">${Author.correo}</p>
            </div>
        </div>`;

    let sectionPostition = newAuthor.insertCell(1);
    sectionPostition.innerHTML = `
            <p class="text-xs font-weight-bold mb-0">${Author.puesto}</p>
            <p class="text-xs text-secondary mb-0">${Author.puesto2}</p>
        `;

    let sectionStatus = newAuthor.insertCell(2);
    sectionStatus.innerHTML = `
            <span class="badge badge-sm bg-gradient-${classStatus}">${Author.status}</span>`;
    sectionStatus.className = "align-middle text-center text-sm";

    let sectionEmployed = newAuthor.insertCell(3);
    sectionEmployed.innerHTML = `
            <span class="text-secondary text-xs font-weight-bold">${Author.employed}</span>`;
    sectionEmployed.className = "align-middle text-center";

    let sectionEdit = newAuthor.insertCell(4);
    sectionEdit.innerHTML = `
        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
            Edit
        </a>`;
    sectionEdit.className = "align-middle";
}