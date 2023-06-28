const array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

function obtenerLongitud() {
  console.log(array.length);
}

function obtenerElementoAleatorio() {
  const randomIndex = Math.floor(Math.random() * array.length);
  console.log(array[randomIndex]);
}
