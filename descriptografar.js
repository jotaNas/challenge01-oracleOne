let btnDesencriptar = document.querySelector(".btn-descript");

btnDesencriptar.addEventListener("click", function (event) {
  let textoDesencriptado = desencriptar(
    document.querySelector(".text-01").value
  );
  let textoDesencriptadoOut = document.querySelector(".text-02");
  let textoEncriptadoIn = document.querySelector(".text-01");
  let textoSpan = document.querySelector(".texto-copiado");
  textoDesencriptadoOut.value = textoDesencriptado;
  textoEncriptadoIn.value = "";
  textoSpan.classList.remove("view");
  event.preventDefault();
});

function desencriptar(texto) {
  var textoEncriptado = "";

  var textoEncriptado = texto.replace(/enter/g, "e");
  var textoEncriptado = textoEncriptado.replace(/imes/g, "i");
  var textoEncriptado = textoEncriptado.replace(/ai/g, "a");
  var textoEncriptado = textoEncriptado.replace(/ober/g, "o");
  var textoEncriptado = textoEncriptado.replace(/ufat/g, "u");
  return textoEncriptado;
}
