const fs = require("fs");
const colors = require('colors')

const crearArchivoTabla = async (base, limite = 10, listar = false) => {
  try {
    

    let salida = "", consola = "";

    for (let i = 1; i <= limite; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${colors.red(base)} x ${colors.magenta(i)} = ${base * i}\n`;
    }

    if(listar) {

      console.log("====================".blue);
      console.log("    Tabla del:", colors.red(base));
      console.log("====================".blue);

      console.log(consola);
    }

    const fileName = `tabla-${base}.txt`;

    fs.writeFileSync(`./outputs/${fileName}`, salida);

    return fileName;
  } catch (error) {
    throw error
  }
};

module.exports = {
  crearArchivoTabla,
};
