const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


//la letra "e" es convertida para "enter"
//la letra "i" es convertida para "imes"
//la letra "a" es convertida para "ai"
//la letra "o" es convertida para "ober"
//la letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.Value = "";
    mensaje.style.backgroundImage = "none";
}



function encriptar(stringEncriptada){
    let matrizCodigo =[["e", "enter"], ["i","imes"],["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.Value = "";
  
}

function desencriptar(stringDesencriptada){
    let matrizCodigo =[["e", "enter"], ["i","imes"],["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringDesencriptada
}

function copy(){
    var contenido = document.querySelector(".mensaje");
    //contenido.select();
    navigator.clipboard.writeText(contenido.value);
    mensaje.value();
    //alert("¡Se copió!");
}

