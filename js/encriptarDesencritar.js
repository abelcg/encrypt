import { validar } from "./helpers.js";

const conversiones = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};
const reconversion = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u",
};

let btnEncriptar = document.getElementById("encriptar");
let encryptedText = document.getElementById("encryptedText");
let btnDesencriptar = document.getElementById("desencriptar");
let text = document.getElementById("textToEncrypt");
let sinMensaje = document.getElementById("sinMensaje");
let conMensaje = document.getElementById("conMensaje");

const encriptar = () => {
  if (text.value === "") {
    conMensaje.className = "inactive container";
    sinMensaje.className = "inactiv";
  } else if(!validar(text)){
    sinMensaje.className = "inactive";
    conMensaje.className = "container";
    let encriptado = text.value.replaceAll(
      /a|e|i|o|u/g,
      (vocal) => conversiones[vocal]
    );
    encryptedText.value = encriptado;
  } 
};

btnEncriptar.addEventListener("click", () => encriptar());

let copy = async () => {
  encryptedText.select();
  await navigator.clipboard.writeText(encryptedText.value);
};

document.querySelector("#copy").addEventListener("click", copy);

const textSelect = () => {
  text.select();
};

text.addEventListener("click", () => textSelect());

const desencriptar = () => {
  if (text.value === "") {
    conMensaje.className = "inactive container";
    sinMensaje.className = "inactiv";
  } else {
    let desencriptado = text.value.replaceAll(
      /ai|enter|imes|ober|ufat/g,
      (patron) => reconversion[patron]
    );
    encryptedText.value = desencriptado;
    text.value = "";
  }
};

btnDesencriptar.addEventListener("click", () => desencriptar());
