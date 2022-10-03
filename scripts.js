let element = "Ingrese su Email";
document.getElementById("textomail").innerHTML = element;
const getValueInput = () =>{
    element = document.getElementById("email").value; 
    document.getElementById("textomail").innerHTML = " El mail ingresado es " + element; 
  }