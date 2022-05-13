let users=[];
users.push({"username":"daniel@gmail.com", "password":"123456"});
users.push({"username":"erika@gmail.com", "password":"123456"});
users.push({"username":"jose@gmail.com", "password":"123456"});
users.push({"username":"diego@gmail.com", "password":"123456"});
users.push({"username":"armando@gmail.com", "password":"123456"});

//Agrega el evento al botón
document.getElementById("signinBtn").addEventListener("click", SignIn); 

function SignIn(){
    let userName = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;
    let loginSection = document.getElementById("loginBlock");

    // busca al usuario en el arreglo
    let index = users.findIndex(element => element.username === userName);
    // Usuario existe
    if(index >=0 ){
        if(users[index].password !== password){
            alert("Contraseña inválida");
            return;
        } else {
            // si existe
            loginSection.innerHTML = `<h3 class="font-weight-bolder text-info text-gradient">${users[index].username} you've successfully logged in, welcome</h3>`;
        }
    } else {
        alert("El usuario no existe");
        return;
    }
}

