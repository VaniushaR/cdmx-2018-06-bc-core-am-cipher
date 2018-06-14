//comprobar enlace
console.log("conectado");


/*se declara arrowfunction encode
  const encode = () => {
  console.log("Inicio del cifrado");
  const texto = document.getElementById("textToCipher").value;
  const clave = parseInt(document.getElementById("favNumber").value);
  console.log(texto);
//Crear variable que pueda guardar el contenido ya procesado en el cifrado.
  let cifrado = "";
  let getCodeNumber = "";
//Crear función con FOR para poder especificar el número de iteraciones acorde al string length
  for(let i=0; i<texto.length; i++) {
          console.log("El codificado ha iniciado");
//el índice es = a 0, el number o i de iteración debe ser menor al texto del input y debe aumentar 1
       // if (parseInt(texto[i])%1 === 0)
        //   texto = prompt("Por favor ingrese un texto sin numeros");
//condicionar para no ingresar numeros//*quitar* es mucha locura
          if (parseInt(texto[i])%1 === 0) {
            alert("Por favor ingrese sólo texto, sin números");
            console.log("El usuario ingresó un número");
          //que sea sensible a los espacios
          } else if (texto[i].charCodeAt() == 32) {
            let espacios = " ";
            cifrado += espacios;
            console.log("Espacio leído");
          //vamos  a buscar ahora las mayúsulas del 65 al 90
        } else if (texto[i].charCodeAt() >= 65 && texto[i].charCodeAt() <= 90) {
            let mayusculas = (texto[i].charCodeAt()- 65 + clave) % 26 + 65;
            let getCodeNumber = String.fromCharCode(mayusculas);
            cifrado += getCodeNumber;
            console.log("Mayúscula leída");
                console.log(getCodeNumber);
          //vamos a buscar minúsculas del 97 al 122
        } else if (texto[i].charCodeAt() >= 97 && texto[i].charCodeAt() <= 122) {
            let minusculas = (texto[i].charCodeAt() - 97 + clave) % 26 + 97;
            let getCodeNumber = String.fromCharCode(minusculas);
            cifrado += getCodeNumber;
            console.log("Minúscula leída");
                console.log(getCodeNumber);
            }
    console.log(getCodeNumber);

        document.getElementById('encode').innerHTML = "Tu mensaje cifrado es: " + cifrado;
 //regresa el valor total de cifrado y se rompe el flujo del código, se finaliza el cifrado.
        console.log("Fin")
      }
    } */
//se declara la arrowfunction decode
  /* const decode = () => {
  console.log("Se ha iniciado el descifrado")

  const texto = document.getElementById("textToCipher").value;
  const clave = parseInt(document.getElementById("favNumber").value);
  console.log(texto);
  //Crear variable que pueda guardar el contenido ya procesado en el cifrado.
  let cifrado = "";
  let getCodeNumber = "";
  //Crear función con FOR para poder especificar el número de iteraciones acorde al string length
  for(let i=0; i<texto.length; i++) {
          console.log("El codificado ha iniciado");
  //el índice es = a 0, el number o i de iteración debe ser menor al texto del input y debe aumentar 1
       // if (parseInt(texto[i])%1 === 0)
        //   texto = prompt("Por favor ingrese un texto sin numeros");
  //condicionar para no ingresar numeros//*quitar* es mucha locura
          if (parseInt(texto[i])%1 === 0) {
            alert("Por favor ingrese sólo texto, sin números");
            console.log("El usuario ingresó un número");
          //que sea sensible a los espacios
          } else if (texto[i].charCodeAt() == 32) {
            let espacios = " ";
            cifrado += espacios;
            console.log("Espacio leído");
          //vamos  a buscar ahora las mayúsulas del 65 al 97
        } else if (texto[i].charCodeAt() >= 65 && texto[i].charCodeAt() <= 90) {
            let mayusculas = (texto[i].charCodeAt()- 90 - clave) % 26 + 90;
            let getCodeNumber = String.fromCharCode(mayusculas);
            cifrado += getCodeNumber;
            console.log("Mayúscula leída");
                console.log(getCodeNumber);
          //vamos a buscar minúsculas del 97 al 122
        } else if (texto[i].charCodeAt() >= 97 && texto[i].charCodeAt() <= 122) {
            let minusculas = (texto[i].charCodeAt() - 122 - clave) % 26 + 122;
            let getCodeNumber = String.fromCharCode(minusculas);
            cifrado += getCodeNumber;
            console.log("Minúscula leída");
                console.log(getCodeNumber);
            }
    console.log(getCodeNumber);

        document.getElementById('decode').innerHTML = "Tu mensaje cifrado es: " + cifrado;
  //regresa el valor total de cifrado y se rompe el flujo del código, se finaliza el cifrado.
        console.log("Fin");
      }
    } */
