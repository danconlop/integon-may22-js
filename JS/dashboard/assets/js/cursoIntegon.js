// class Author{
//     constructor (foto, nombre, correo, puesto, puesto2, status, employed){
//         this.foto=foto,
//         this.nombre = nombre;
//         this.correo = correo;
//         this.puesto = puesto;
//         this.puesto2 = puesto2;
//         this.status = status;
//         this.employed = employed;
//     }
// }

const authors = [
    new Author("team-1.jpg", "Ernesto Perez", "eperez@gmail.com", "Developer", "Jr", "Online", "5/11/2022"),
    new Author("team-2.jpg", "Alejandro Gomez", "agomez@gmail.com", "Manager", "Jr", "Offine", "5/10/2021"),
    new Author("team-3.jpg", "Juan Gonzalez", "jgonzalez@gmail.com", "Scrum Master", "Sr", "Offine", "4/11/2002"),
    new Author("team-4.jpg", "Josefina Lopez", "jlopez@gmail.com", "Developer", "Sr", "Online", "1/01/2019")
]


function addAuthor(){
    // Get table element by id
    let authorsTable = document.getElementById("authors");
    // Table body element
    let tableBody = document.getElementById("authorsTBody");
    tableBody.innerHTML = "";

    authors.forEach(e => {
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
        sectionStatus.innerHTML =`
            <span class="badge badge-sm bg-gradient-${classStatus}">${e.status}</span>`;
        sectionStatus.className = "align-middle text-center text-sm";
    
        let sectionEmployed = newAuthor.insertCell(3);
        sectionEmployed.innerHTML =`
        <span class="text-secondary text-xs font-weight-bold">${e.employed}</span>`;
        sectionEmployed.className="align-middle text-center";
    
        let sectionEdit = newAuthor.insertCell(4);
        sectionEdit.innerHTML=`
        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
            Edit
        </a>`;
        sectionEdit.className="align-middle";
    });
}

