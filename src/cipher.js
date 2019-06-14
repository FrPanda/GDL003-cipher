window.cipher = {
    encode: (offset, string) => {
      //let string = input.value;
     //if (string.match(/[A-zA-Z]/)) {
        /* let cipher = word =>  {
    // variable para la salida de la palabra encriptada*/
        let output = '';
        // recorrido dentro de la palabra ingresada
        for (let i = 0; i < string.length;i++) {
            let code2;  // variable en donde se convierte la letra en codigo ascii
          let code = string.charCodeAt(i);
          // variable que guarda la conversion de codigo ascii a letra
        //  let code2 = string[i];
          console.log(code);

          // analizando las letras mayusculas A= 65 Y Z= 90
          //if (code >= 65 && code <= 90)
          if ((code >= 65) && (code <= 90))
          {
            // ejecutando los 33 espacios y convirtiendo de lenguaje ascii a letra
            let code2 = String.fromCharCode((code - 65 + offset) % 26 + 65);
              output += code2;
              console.log(code2);
            // analizando las letras minusculas a= 97 y z=122 y ejecutando los 33 espacios
          }
          else if ((code >= 97) && (code <= 122)) {
            code2 = String.fromCharCode((code - 97 + offset) % 26 + 97);
          output += code2;
        }
          // salida de la palabra encriptada
console.log(code2);
              console.log(output);

        }
        return output;

  },

  decode:(offset,string)=> {
let output = '';
    for (let i = 0; i < string.length;i++){
    //let code2;
      let code = string.charCodeAt(i);
      //let code2;
      // variable que guarda la conversion de codigo ascii a letra
      let output = string[i];
      // analizando las letras mayusculas A= 65 Y Z= 90
      if ((code >= 65) && (code <= 90)) {
      // ejecutando los 33 espacios y convirtiendo de lenguaje ascii a letra
        code2 =((code >= 65) && (code <= 90));
        output += string;
        //String.fromCharCode(((code - 90 - offset) % 26) + 90);
            //code2 = String.fromCharCode(((code - 65 - cambio + 26) % 26) + 65);
      } else if ((code >= 97) && (code <= 122)) {//  analizando las letras minusculas a= 97 y z=122 y ejecutando los 33 espacios
        code2 = String.fromCharCode(((code - 122 - offset) % 26) + 122);
      }
      else {
      // salida de la palabra encriptada
      output += string;
    }
return output;
  }
}
};
