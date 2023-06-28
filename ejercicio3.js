let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

javascript1.splice(0, 1, "Objetos");
javascript1.splice(2, 1, "ArraysDifíciles");

const ultimosDosElementos = javascript1.slice(-2);

const indiceFunciones = javascript1.indexOf("Funciones");
