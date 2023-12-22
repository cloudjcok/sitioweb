function reproducirSonido() {
    let sonido = document.getElementById("miSonido");
    sonido.play();
  }

  // Asociar la función al evento clic de la imagen
 let imagen = document.getElementById("miImagen");
  imagen.addEventListener("click", reproducirSonido);


  // JS PARA VERIFICAR EL ANIMAL
  const animalCorrecto = "perro"
  let r=""
  function verificarRespuesta(opcionSeleccionada){
    if(opcionSeleccionada === animalCorrecto){
       r="GUAUWWW! SI ES UN PERRO "
    }else{
        r="UPPS,DALE DE NUEVO:("
    }
    resp = document.getElementById("resp")
    resp.innerHTML = `${r}`
  }