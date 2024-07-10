// Función para encriptar un texto utilizando el cifrado César
function encriptarTexto(texto, desplazamiento) {
    let textoEncriptado = "";
  
    for (let i = 0; i < texto.length; i++) {
      let char = texto[i];
      if (char.match(/[a-z]/i)) {
        let code = texto.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + desplazamiento) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + desplazamiento) % 26) + 97);
        }
      }
      textoEncriptado += char;
    }
  
    return textoEncriptado;
  }
  
  // Función para desencriptar un texto utilizando el cifrado César
  function desencriptarTexto(texto, desplazamiento) {
    return encriptarTexto(texto, (26 - desplazamiento) % 26);
  }
  
  // Obtener elementos del DOM
  const inputTexto = document.getElementById('inputTexto');
  const btnEncriptar = document.getElementById('btnEncriptar');
  const btnDesencriptar = document.getElementById('btnDesencriptar');
  const textoEncriptado = document.getElementById('textoEncriptado');
  const btnCopiar = document.getElementById('btnCopiar');
  
  // Función para copiar texto al portapapeles
  function copiarTexto() {
    textoEncriptado.select();
    document.execCommand('copy');
  }
  
  // Evento click para encriptar
  btnEncriptar.addEventListener('click', function() {
    let texto = inputTexto.value;
    let textoEncriptado = encriptarTexto(texto, 3); // Cambiar 3 por el desplazamiento deseado
    document.getElementById('textoEncriptado').value = textoEncriptado;
  });
  
  // Evento click para desencriptar
  btnDesencriptar.addEventListener('click', function() {
    let texto = inputTexto.value;
    let textoDesencriptado = desencriptarTexto(texto, 3); // Cambiar 3 por el desplazamiento deseado
    document.getElementById('textoEncriptado').value = textoDesencriptado;
  });
  
  // Evento click para copiar al portapapeles
  btnCopiar.addEventListener('click', function() {
    copiarTexto();
    alert('¡Texto copiado al portapapeles!');
  });
  