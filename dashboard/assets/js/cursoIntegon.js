function addAuthor(){
    // Get table element by id
    let authorsTable = document.getElementById("authors");

    // Author data
    let authorsName = "Daniel Contreras";
    let authorsEmail = "daniel@gmail.com";
    let authorsPosition1 = "Programator";
    let authorsPosition2 = "Developer";
    let authorsStatus = "Offline";
    let authorEmployed="04/01/22";
    let classStatus = authorsStatus == "Online" ? "success" : "secondary";

    // New Row
    let newAuthor = authorsTable.insertRow(-1);

    // Sections
    let sectionName = newAuthor.insertCell(0);
    sectionName.innerHTML = `
            <div class="d-flex px-2 py-1">
                <div>
                    <img src="../assets/img/team-4.jpg" class="avatar avatar-sm me-3" alt="user6">
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">${authorsName}</h6>
                    <p class="text-xs text-secondary mb-0">${authorsEmail}</p>
                </div>
            </div>`;

    let sectionPostition = newAuthor.insertCell(1);
    sectionPostition.innerHTML = `
        <p class="text-xs font-weight-bold mb-0">${authorsPosition1}</p>
        <p class="text-xs text-secondary mb-0">${authorsPosition2}</p>
    `;

    let sectionStatus = newAuthor.insertCell(2);
    sectionStatus.innerHTML =`
        <span class="badge badge-sm bg-gradient-${classStatus}">${authorsStatus}</span>`;
    sectionStatus.className = "align-middle text-center text-sm";

    let sectionEmployed = newAuthor.insertCell(3);
    sectionEmployed.innerHTML =`
    <span class="text-secondary text-xs font-weight-bold">${authorEmployed}</span>`;
    sectionEmployed.className="align-middle text-center";

    let sectionEdit = newAuthor.insertCell(4);
    sectionEdit.innerHTML=`
    <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
        Edit
    </a>`;
    sectionEdit.className="align-middle";
}