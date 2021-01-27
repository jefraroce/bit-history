//La propiedad Value establece o devuelve el valor del atributo value de un campo numerico, especifica el valor predeterminado o el valor que el usuario escribe

function validarFormulario() {

    
    //La propiedad Value establece o devuelve el valor del atributo value de un campo numerico, especifica el valor predeterminado o el valor que el usuario escribe
    let txtNombre = document.getElementById('nombre').value;
    let txtCorreo = document.getElementById('correo').value;
    let txtTelefono =document.getElementById('telefono').value;
    let txtMensaje = document.getElementById('mensaje').value;
        
    //Si no hay caracteres
    console.log(txtNombre);
    console.log(txtCorreo);
    console.log(txtTelefono);
    
    
    if (txtNombre == null || txtNombre.length == 0) {
        alert('ERROR: El campo Nombre no debe ir vacío ni incompleto');
    //Devuelve el valor false y sigue al otro
        return false;
    
    } else{
        //Expresiones regulares
        //probando la expresion regular en esa variable
        if (/^([0-9])*$/.test(txtNombre)) {
            alert('ERROR: El campo "Nombre" no debe tener números');
            return false;
      } else {
    
            //Si no son letras, negación:
            //Si yo escribo un caracter especial eso se cumple
            if (!(/^[A-Za-z\_\-\.\s\xF1\xD1]+$/.test(txtNombre))){
                alert('ERROR: El campo "Nombre" no debe tener carácteres especiales');
                return false;
    
            }
    
          }
        
        }
    
    //Puede llevar letras y guion y debe ir luego un arroba obligatoriamente, luego puede ir también palabras y guion y debe ir un punto obligatoriamente y puede ir palabras y un numero
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(txtCorreo))){ 
        alert('ERROR: Debe escribir un correo válido');
        return false;
              
    
    
        }
    //Length: Saca el número de caracteres que esta en la variable, en resumen cuenta los caracteres
    if (txtTelefono == null || txtTelefono.length  ==  0){
    
        alert ('ERROR: El campo "Teléfono" no debe ir vacio ni llevar letras');
        return false;
    } else{
    
    //Evalúa un argumento para determinar si es un número
    if(isNaN(txtTelefono)){
    
        alert('ERROR: El campo "Télefono" no debe llevar letras');
        return false;
    }
    
    }
    
    
    if(txtMensaje == null || txtMensaje.length == 0){
    
    alert('ERROR: El campo "Mensaje" no debe ir vacio');
    
    return false;
    
    }
    
    
    
    alert('Gracias por tu información :)');
    
    return true;
    
    
    
    }