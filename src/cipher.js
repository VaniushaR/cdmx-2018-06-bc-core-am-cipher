//window.cipher = {
  // ...
//};
//comprobar enlace
console.log("conectado");
function cipher(){
  console.log("Inicio del cifrado")
//Crear una función que pueda cifrar textos
//Crear dos variables, una para el input de ingreso de texto y otra para agregar
//la clave o número favorito para el cifrado
  const texto = document.getElementById("textToCipher").value;
  const clave = parseInt(document.getElementById("favNumber").value);
  console.log("Los inputs han sido leídos");
//Crear variable que pueda guardar el contenido ya procesado en el cifrado.
  let cifrado ="";
//Crear función con FOR para poder especificar el número de iteraciones acorde al string length
        for(let i=0; i<texto.length; i++) {
          console.log("El codificado ha iniciado")
//el índice es = a 0, el number o i de iteración debe ser menor al texto del input y debe aumentar 1
       // if (parseInt(texto[i])%1 === 0)
        //   texto = prompt("Por favor ingrese un texto sin numeros ni espacios");
//condicionar para no ingresar numeros//*quitar* es mucha locura
        const getCodeNumber = (texto.toUpperCase().charCodeAt(i) - 65 + clave) % 26 + 65;
        console.log("Funciona la fórmula")
//se declara una variable que realizará la fórmula de cifrado: la fórmula llama al texto del input,
//lo convierte en mayúsculas para sólo usar un rango del ASCII y una evz asigado el número conforme
//a la variable de la clave preferida por el usuario se realizará la asignación de la letra cifrada:
        const cipherString = String.fromCharCode(getCodeNumber);
        console.log("Funciona number encode a string")
//se declara la variable para asignar mediante fromCharCode la letra equivalente al número cifrado y
//se almacenará cada iteración mediante la adición de cada carácter a la variable.
    cifrado+= cipherString;
    }
    console.log(cifrado);
  document.getElementById('encode').innerHTML = "Tu mensaje cifrado es: " + cifrado;
 //regresa el valor total de cifrado y se rompe el flujo del código, se finaliza el cifrado.
console.log("Fin")
}
function decipher(){
  console.log("Se ha iniciado el descifrado")

  const texto = document.getElementById("textToCipher").value;
  const clave = parseInt(document.getElementById("favNumber").value);
  console.log("Los inputs han sido leídos");

  let decifrado ="";
//Crear función con FOR para poder especificar el número de iteraciones acorde al string length
        for(let i=0; i<texto.length; i++) {
          console.log("El decodificado ha iniciado")
//el índice es = a 0, el number o i de iteración debe ser menor al texto del input y debe aumentar 1
       // if (parseInt(texto[i])%1 === 0)
        //   texto = prompt("Por favor ingrese un texto sin numeros ni espacios");
//condicionar para no ingresar numeros//*quitar* es mucha locura
        const getCodeNumber = (texto.toUpperCase().charCodeAt(i) - 65 - clave) % 26 + 65;
        console.log("Funciona la fórmula")
//se declara una variable que realizará la fórmula de cifrado: la fórmula llama al texto del input,
//lo convierte en mayúsculas para sólo usar un rango del ASCII y una evz asigado el número conforme
//a la variable de la clave preferida por el usuario se realizará la asignación de la letra cifrada:
        const cipherString = String.fromCharCode(getCodeNumber);
        console.log("Funciona number encode a string")
//se declara la variable para asignar mediante fromCharCode la letra equivalente al número cifrado y
//se almacenará cada iteración mediante la adición de cada carácter a la variable.
    decifrado+= cipherString;
    }
    console.log(decifrado);
  document.getElementById('decode').innerHTML = "Tu mensaje descifrado es: " + decifrado;
 //regresa el valor total de cifrado y se rompe el flujo del código, se finaliza el cifrado.
console.log("Fin")
}
