let posicion = document.getElementById("watch");
posicion.innerHTML = "<h1>El reloj</h1>";

function relleno(number) {
  number < 10 ? (number = "0" + number) : number;
  return number;
}

setInterval(() => {
  let horaActual = new Date();
  let hora = relleno(horaActual.getHours());
  let min = relleno(horaActual.getMinutes());
  let sec = relleno(horaActual.getSeconds());
  posicion.innerHTML = `<div class="oscar">
        <div class="box">${hora}</div>
        <div class="box">${min} </div>
        <div class="box">${sec}</div>
    </div>`;
}, 1000);
