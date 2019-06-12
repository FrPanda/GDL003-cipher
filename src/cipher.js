window.cipher= {
  encode:(offset,string)=> {
//  string=string:toUpperCase();
//  let offset=33;
  let output="";
  //for (let i = 0 ; i <string.length ; i++){  // recorrer el string
//if (string.match(/[A-zA-Z]/)) {
  // recorrido dentro de la palabra ingresada
  for (let i = 0; i < string.length;i++) {
    // variable en donde se convierte la letra en codigo ascii
    let code = string.charCodeAt(i);
    // variable que guarda la conversion de codigo ascii a letra
    let code2 = string[i];// analizando las letras mayusculas A= 65 Y Z= 90
    if ((code >= 65) && (code <= 90)) {
  // variable para la salida de la palabra encriptada*/
      //let output = '';
      code2 = String.fromCharCode(((code - 65 + 33) % 26) + 65);
    } else if ((code >= 97) && (code <= 122)) {
      code2 = String.fromCharCode(((code - 97 + 33) % 26) + 97);
    }
    // salida de la palabra encriptada
    output += code2;
}
  return output

},
  decode:(offset,string)=> {
  string=string.toUpperCase();
  let decipher="";
  // variable para la salida de la palabra encriptada
  let output = '';// recorrido dentro de la palabra ingresada
  for (let i = 0; i < string.length;i++){
  // variable en donde se convierte la letra en codigo ascii
    let code = string.charCodeAt(i);
    // variable que guarda la conversion de codigo ascii a letra
    let code2 = string[i];
    // analizando las letras mayusculas A= 65 Y Z= 90
    if ((code >= 65) && (code <= 90)) {
    // ejecutando los 33 espacios y convirtiendo de lenguaje ascii a letra
      code2 = String.fromCharCode(((code - 65 - 33 + 26 * 2) % 26) + 65);
    } else if ((code >= 97) && (code <= 122)) {//  analizando las letras minusculas a= 97 y z=122 y ejecutando los 33 espacios
      code2 = String.fromCharCode(((code - 97 - 33 + 26 * 2) % 26) + 97);
    };
    // salida de la palabra encriptada
    output += code2;
  };
}
};
