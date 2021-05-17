
let myScript = function () {
  let animado = document.querySelectorAll(".animado");

  function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < animado.length; i++) {
      let alturaAnimado = animado[i].offsetTop;
      if (alturaAnimado - 420 < scrollTop) {
        animado[i].style.opacity = 1;
        animado[i].classList.add("mostrarArriba");
      }
    }
  }

  window.addEventListener('scroll', mostrarScroll);

  return { mostrarScroll: mostrarScroll }
}

let myScript2 = function () {
  let animado2 = document.querySelectorAll(".animado2");

  function mostrarScroll2() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < animado2.length; i++) {
      let alturaAnimado = animado2[i].offsetTop;
      if (alturaAnimado - 420 < scrollTop) {
        animado2[i].style.opacity = 1;
        animado2[i].classList.add("mostrarDerecha");
      }
    }
  }
  window.addEventListener('scroll', mostrarScroll2);

  return { mostrarScroll2: mostrarScroll2 }

}


let myScript3 = function () {

  let animado3 = document.querySelectorAll(".animado3");

  function mostrarScroll3() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < animado3.length; i++) {
      let alturaAnimado = animado3[i].offsetTop;
      if (alturaAnimado - 420 < scrollTop) {
        animado3[i].style.opacity = 1;
        animado3[i].classList.add("mostrarIzquierda");
      }
    }
  }

  window.addEventListener("scroll", mostrarScroll3);

  return { mostrarScroll3: mostrarScroll3 }
}


