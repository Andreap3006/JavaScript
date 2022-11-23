//Para abrir y cerrar el menú

function accion() {
  let prueba = document.getElementsByClassName("btn-menu");
  for (let i = 0; i < prueba.length; i++) {
    prueba[i].classList.toggle("ocultar");
  }
  let ancla = document.getElementsByClassName("nav");
  for (let i = 0; i < ancla.length; i++) {
    ancla[i].classList.toggle("ocultar");
  }
}

function acciones() {
  let enlace = document.getElementsByClassName("nav");
  for (let i = 0; i < enlace.length; i++) {
    enlace[i].classList.toggle("ocultar");
  }
  let prueba = document.getElementsByClassName("btn-menu");
  for (let i = 0; i < prueba.length; i++) {
    prueba[i].classList.toggle("ocultar");
  }
}

//Validación del formulario

function validarEmail(valor) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)) {
    return true;
  } else {
    return false;
  }
}

let form = document.querySelector("#form");
form.addEventListener("submit", btnSubmit);

async function btnSubmit(e) {
  e.preventDefault();
  let form = new FormData(this);
  let response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });

  let nombre = document.getElementById("nameCliente").value;
  let apellido = document.getElementById("lastName").value;
  let email = document.getElementById("emailCliente").value;
  let pais = document.getElementById("pais").value;
  let textConsulta = document.getElementById("txt-area").value;
  let elementoActivo = document.querySelector('input[name="motivo"]:checked');

  if (nombre.length == 0 || nombre.length === "") {
    Toastify({
      text: "Debe ingresar su nombre",
      duration: 3000,
      destination: "index.html",
      newWindow: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #E9EBEE, #4267B3)",
      },
    }).showToast();
    return;
  } else {
    if (apellido.length == 0 || nombre.length === "") {
      Toastify({
        text: "Debe ingresar su apellido",
        duration: 3000,
        destination: "index.html",
        newWindow: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #E9EBEE, #4267B3)",
        },
      }).showToast();
      return;
    } else {
      if (email.length == 0 || email.length === "") {
        Toastify({
          text: "Debe ingresar su email",
          duration: 3000,
          destination: "index.html",
          newWindow: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "linear-gradient(to right, #E9EBEE, #4267B3)",
          },
        }).showToast();
        return;
      } else {
        if (pais.length == 0 || nombre.length === "") {
          Toastify({
            text: "Debe ingresar su pais",
            duration: 3000,
            destination: "index.html",
            newWindow: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, #E9EBEE, #4267B3)",
            },
          }).showToast();
          return;
        } else {
          if (textConsulta.length == 0 || nombre.length === "") {
            Toastify({
              text: "Debe ingresar su sugerencia",
              duration: 3000,
              destination: "index.html",
              newWindow: true,
              gravity: "top",
              position: "right",
              stopOnFocus: true,
              style: {
                background: "linear-gradient(to right, #E9EBEE, #4267B3)",
              },
            }).showToast();
            return;
          } else {
            if (elementoActivo) {
                if (response.ok) {
                    this.reset();
                    Toastify({
                      text: "Gracias contactarnos, pronto tendrás una respuesta",
                      duration: 3000,
                      destination: "index.html",
                      newWindow: true,
                      gravity: "top",
                      position: "right",
                      stopOnFocus: true,
                      style: {
                        background: "linear-gradient(to right, #E9EBEE, #4267B3)",
                      },
                    }).showToast();
                }
            } else {
              Toastify({
                text: "Seleccione su motivo por favor",
                duration: 3000,
                destination: "index.html",
                newWindow: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                  background: "linear-gradient(to right, #E9EBEE, #4267B3)",
                },
              }).showToast();
            }
          }
        }
      }
    }
  }
}


// Selección de los mapas

let card3 = document.getElementById("card-3");
let card2 = document.getElementById("card-2");
let card1 = document.getElementById("card-1");
let mapa1 = document.getElementById("mapa_1");
let mapa2 = document.getElementById("mapa_2");
let mapa3 = document.getElementById("mapa_3");

card1.addEventListener("click", primerMapa);
card2.addEventListener("click", segundoMapa);
card3.addEventListener("click", tercerMapa);

function tercerMapa() {
  mapa3.style.display = "flex";
  mapa1.style.display = "none";
  mapa2.style.display = "none";
}

function primerMapa() {
  mapa1.style.display = "flex";
  mapa3.style.display = "none";
  mapa2.style.display = "none";
}

function segundoMapa() {
  mapa2.style.display = "flex";
  mapa3.style.display = "none";
  mapa1.style.display = "none";
}

//Seleccionar una card

function verInfoCard() {
  document.getElementById("rutas").style.display = "flex";
  document.getElementById("ruta1").style.display = "flex";
  document.getElementById("ruta2").style.display = "none";
  document.getElementById("ruta3").style.display = "none";
  document.getElementById("triangulo1").style.display = "flex";
  document.getElementById("triangulo2").style.display = "none";
  document.getElementById("triangulo3").style.display = "none";
}

function verInfoCard2() {
  document.getElementById("rutas").style.display = "flex";
  document.getElementById("ruta1").style.display = "none";
  document.getElementById("ruta2").style.display = "flex";
  document.getElementById("ruta3").style.display = "none";
  document.getElementById("triangulo2").style.display = "flex";
  document.getElementById("triangulo1").style.display = "none";
  document.getElementById("triangulo3").style.display = "none";
}

function verInfoCard3() {
  document.getElementById("rutas").style.display = "flex";
  document.getElementById("ruta1").style.display = "none";
  document.getElementById("ruta2").style.display = "none";
  document.getElementById("ruta3").style.display = "flex";
  document.getElementById("triangulo3").style.display = "flex";
  document.getElementById("triangulo2").style.display = "none";
  document.getElementById("triangulo1").style.display = "none";
}

function verInfoCard4() {
  document.getElementById("rutas2").style.display = "flex";
  document.getElementById("ruta4").style.display = "flex";
  document.getElementById("ruta5").style.display = "none";
  document.getElementById("ruta6").style.display = "none";
  document.getElementById("triangulo4").style.display = "flex";
  document.getElementById("triangulo5").style.display = "none";
  document.getElementById("triangulo6").style.display = "none";
}

function verInfoCard5() {
  document.getElementById("rutas2").style.display = "flex";
  document.getElementById("ruta4").style.display = "none";
  document.getElementById("ruta5").style.display = "flex";
  document.getElementById("ruta6").style.display = "none";
  document.getElementById("triangulo5").style.display = "flex";
  document.getElementById("triangulo6").style.display = "none";
  document.getElementById("triangulo4").style.display = "none";
}

function verInfoCard6() {
  document.getElementById("rutas2").style.display = "flex";
  document.getElementById("ruta4").style.display = "none";
  document.getElementById("ruta5").style.display = "none";
  document.getElementById("ruta6").style.display = "flex";
  document.getElementById("triangulo6").style.display = "flex";
  document.getElementById("triangulo5").style.display = "none";
  document.getElementById("triangulo4").style.display = "none";
}


function cerrar() {
  document.getElementById("rutas").style.display = "none";
  document.getElementById("triangulo1").style.display = "none";
  document.getElementById("triangulo2").style.display = "none";
  document.getElementById("triangulo3").style.display = "none";
  document.getElementById("rutas2").style.display = "none";
  document.getElementById("triangulo4").style.display = "none";
  document.getElementById("triangulo5").style.display = "none";
  document.getElementById("triangulo6").style.display = "none";
}

/*Cotizador*/

function cotizar(){
  
  let aventuras = document.querySelector('input[name="aventuras"]:checked').value
  let cotizacion = document.getElementById('cotizacion')
  let error = document.getElementById('error-cotizador')

  console.log(aventuras)

    let monto = 0
    if(aventuras === 'aventura1'){
      error.style.display= "none";
      cotizacion.style.display= "flex";
      monto += 2000;
        return cotizacion.innerHTML= 'Su cotización es: ' + monto
    }
    else if(aventuras === 'aventura2'){
      error.style.display= "none";
      cotizacion.style.display= "flex";
      monto += 7500;
        return cotizacion.innerHTML= 'Su cotización es: ' + monto
    }
    else if(aventuras === 'aventura3'){
      error.style.display= "none";
      cotizacion.style.display= "flex";
      monto += 12000;
      return cotizacion.innerHTML= 'Su cotización es: ' + monto
    }
    else if(aventuras === 'aventura4'){
      error.style.display= "none";
      cotizacion.style.display= "flex";
      monto += 3000;
        return cotizacion.innerHTML= 'Su cotización es: ' + monto
    }
    else if(aventuras === 'aventura5'){
      error.style.display= "none";
      cotizacion.style.display= "flex";
      monto += 8000;
        return cotizacion.innerHTML= 'Su cotización es: ' + monto
    }
    else if(aventuras === 'aventura6'){
      error.style.display= "none";
      cotizacion.style.display= "flex";
      monto += 5000;
        return cotizacion.innerHTML= 'Su cotización es: ' + monto
    }else{
        return error.innerHTML='*Debe seleccionar una aventura';
    }
  

}
