const {crearArchivoTabla} = require('./helpers/multiplicar.js')
const argv = require('./config/yargs')

console.clear()

console.log(argv)


crearArchivoTabla(argv.b, argv.h, argv.l)
  .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch( err => console.log(err))







