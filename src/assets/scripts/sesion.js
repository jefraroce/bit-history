let login1 = document.getElementById("login1");
let login2 = document.getElementById("login2");
//Icono Login
let loginUser = document.getElementById("loginUser");
let element = document.getElementById("text");
//CSS directo de JS
element.style.visibility = "hidden";
//Icono Logout
let element2 = document.getElementById("text2");
element2.style.visibility = "hidden";

//Icono Login
function show() {

    if(element.style.visibility == "hidden")   {
        element.style.visibility = "visible";
    } else{
        element.style.visibility = "hidden";
    }




}

//Icono Logout
function show2() {

    if(element2.style.visibility == "hidden")   {
        element2.style.visibility = "visible";
    } else{
        element2.style.visibility = "hidden";
    }


}

//Tomar o recuperrar dato
if (localStorage.getItem('name')) {


    loginUser.innerHTML =localStorage.getItem('name'); //Nos permite leer un dato o asignarlo al contenido Para insertar el codigo Html en el documento "escribir dentro de un elemento HTML -DOMString"
    
}

function iniciarSesion() {

    var usuario= prompt ("Ingresa tu nombre");

    //set item guardar dato
    //localstorage.setitem () 
    localStorage.setItem('name',usuario);




    loginUser.innerHTML = usuario
}

function cerrarSesion() {
    loginUser.innerHTML = " ";
    localStorage.clear();
    

}


login1.onclick = function() {
    iniciarSesion();
    
}



login2.onclick = function() {
    cerrarSesion();
    
}



/* La propiedad Local Storage te permite , acceder al objeto Storage y tiene  la  funcion de almacenar datos de manera local . Los datos persisten almacenados entre las diferentes sesiones de navegacion . Un objeto Storage se puede utilizar para acceder al espacio de almacenamiento local del origen actual */