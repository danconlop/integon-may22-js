let bntSignIn = document.getElementById("signinBtn");
bntSignIn.addEventListener("click", checkUserData);


function fetchUserData(user, pass) {
    let loginSection = document.getElementById("loginBlock");
    let url = `http://localhost:3005/users/${user}`;

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            if(data.user){
                // Usuario existe
                if(data.user.password == pass){
                    loginSection.innerHTML = `<h3 class="font-weight-bolder text-info text-gradient">${data.user.username} you've successfully logged in, welcome</h3>`;
                } else {
                    loginSection.innerHTML += `<h3 class="font-weight-bolder text-danger text-gradient text-center">Wrong credentials</h3>`;
                }
            } else {
                loginSection.innerHTML += `<h3 class="font-weight-bolder text-danger text-gradient text-center">Username not found</h3>`;
            }

        })
        .catch(function (error) {
            console.log("El servidor no está disponible");
        });
}

function checkUserData(){
    let userName = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;
    
    if (userName != ""){
        fetchUserData(userName, password);
    }
}