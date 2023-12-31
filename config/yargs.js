const argv = require('yargs')
                .option('b',{
                  alias: 'base',
                  type: 'number',
                  demandOption: true,
                  describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l',{
                  alias: 'listar',
                  type: 'boolean',
                  default: false,
                  describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                  alias: 'hasta',
                  type: 'number',
                  demandOption: true,
                  describe: 'Es el limite de la tabla'
                })
                .check( (argv) => {
                  if(isNaN(argv.b)) {
                    throw 'La base debe de ser un número'
                  }
                  if(isNaN(argv.h)) {
                    throw 'El límite debe de ser un número'
                  }
                  return true;
                })
                .argv

module.exports = argv