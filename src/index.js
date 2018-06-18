//comprobar enlace
console.log("conectado");
//se declaran las variables globales que toman los dato ingresados por el usuario
const texto = document.getElementById("textToCipher");
const clave = document.getElementById("favNumber");
console.log(texto);
//se declara la arrow function de la acción cifrar:
const cifrado1 =() => {
let cipher1 = texto.value;
let offset = parseInt(clave.value);
//se establece conexión con DOM para que se imprima en pantalla el mensaje cifrado
document.getElementById('encode1').innerHTML = "Tu mensaje cifrado es: " + cipher.encode(cipher1, offset);
}
//se declara la arrow function de la acción descifrar:
const descifrado1 = () => {
let texto2 = texto.value;
let offset = parseInt(clave.value);
//se establece conexión con DOM para que se imprima en pantalla el mensaje decifrado
document.getElementById('decode').innerHTML = "Tu mensaje descifrado es:  \n "  + cipher.decode(texto2, offset);
console.log(cipher.decode(texto2, offset));
}
