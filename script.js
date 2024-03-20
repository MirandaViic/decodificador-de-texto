function abrirModalDeInstrucoes() {
    document.getElementById("instructionsModal").style.display = "block";
  }
  
  function fecharModalDeInstrucoes() {
    document.getElementById("instructionsModal").style.display = "none";
  }
  
  function criptografar() {
    const textoOriginal = document.getElementById("texto-original").value;
    
    if (/[A-ZÀ-ÖØ-öø-ÿ]/.test(textoOriginal)) {
      alert("Por favor, digite apenas letras minúsculas e sem acento.");
      return; 
    }
    
    let textoCriptografado = textoOriginal.replace(/e/g, "enter");
    textoCriptografado = textoCriptografado.replace(/i/g, "imes");
    textoCriptografado = textoCriptografado.replace(/a/g, "ai");
    textoCriptografado = textoCriptografado.replace(/o/g, "ober");
    textoCriptografado = textoCriptografado.replace(/u/g, "ufat");
    document.getElementById("texto-processado").value = textoCriptografado;
    
    document.querySelector(".container-resultado .imagem-resultado").style.display = "none";
    document.querySelector(".container-resultado .mensagem-resultado__1").style.display = "none";
    document.querySelector(".container-resultado .mensagem-resultado__2").style.display = "none";
  }
  
  function descriptografar() {
    let textoParaDescriptografar = document.getElementById("texto-original").value.trim();
    
    if (!textoParaDescriptografar) {
        alert("Por favor, insira um texto para descriptografar.");
        return;
    }
  
    let textoDescriptografado = textoParaDescriptografar.replace(/enter/g, "e");
    textoDescriptografado = textoDescriptografado.replace(/imes/g, "i");
    textoDescriptografado = textoDescriptografado.replace(/ai/g, "a");
    textoDescriptografado = textoDescriptografado.replace(/ober/g, "o");
    textoDescriptografado = textoDescriptografado.replace(/ufat/g, "u");
  
    document.getElementById("texto-processado").value = textoDescriptografado;
  
    document.querySelector(".container-resultado .imagem-resultado").style.display = "none";
    document.querySelector(".container-resultado .mensagem-resultado__1").style.display = "none";
    document.querySelector(".container-resultado .mensagem-resultado__2").style.display = "none";
  }
  