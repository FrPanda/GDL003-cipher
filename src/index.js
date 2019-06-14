/* variables*/
  let input = document.getElementById('input');
  let cipher = document.getElementById('cipher');
  let decipher = document.getElementById('decipher');
  let result = document.getElementById('result');

  /* función para encriptar una palabra*/
  cipher.addEventListener('click', () => {
    let inputWord = input.value;
   let cambio=document.getElementById('desplazamiento').value;
    console.log(cambio);
    let cipher = window.cipher.encode(cambio, inputWord);
      /* Resultado*/
      result.innerHTML = 'El texto encriptado es : ' + cipher ;


  });

  /* función para desencriptar una palabra */
  decipher.addEventListener('click', () => {
    /* $('#desencriptar').click(function() {*/
    let inputWord = input.value;
 let cambio=(document.getElementById('desplazamiento').value);
    console.log(cambio);
      let decipher = window.cipher.decode(cambio,inputWord);
    // variable en donde se convierte la letra en codigo ascii

    /* resultado*/
    result.innerHTML = 'El texto desencriptado es : ' + decipher ;
  });



  /* función para limpiar la entrada*/
  let eraser = document.getElementById('clearbutton');
  eraser.addEventListener('click', () => {
  /* borrar el campo.*/
    input.value = '';
  });
