let btnEncriptar = document.querySelector(".btn-cript");

btnEncriptar.addEventListener("click", function (event) {
  let textoEncriptado = encriptar(document.querySelector(".text-01").value);
  let textoEncriptadoOut = document.querySelector(".text-02");
  let textoEncriptadoIn = document.querySelector(".text-01");
  let textoSpan = document.querySelector(".texto-copiado");
  textoEncriptadoOut.value = textoEncriptado;
  textoEncriptadoIn.value = "";
  textoSpan.classList.remove("view");
  event.preventDefault();
});

function encriptar(texto) {
  let textoEncriptado = "";
  textoEncriptado = texto
    .toLowerCase()
    .replace(new RegExp("[ÁÀÂÃ]", "gi"), "a")
    .replace(new RegExp("[ÉÈÊ]", "gi"), "e")
    .replace(new RegExp("[ÍÌÎ]", "gi"), "i")
    .replace(new RegExp("[ÓÒÔÕ]", "gi"), "o")
    .replace(new RegExp("[ÚÙÛ]", "gi"), "u")
    .replace(new RegExp("[Ç]", "gi"), "c")
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return textoEncriptado;
}
