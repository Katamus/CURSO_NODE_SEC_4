const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type:'number',
                demandOption:true,
                describe:'Es la base de la tabla a multiplicar'
            })
            .option('l',{
                alias:'listar',
                type:'boolean',
                default:false,
                demandOption:true,
                describe:'Lista en consola la tabla de multiplicar'
            })
            .option('h',{
                alias:'hasta',
                type:'number',
                default:10,
                describe:'Limite del multiplicador'
            })
            .check((argv,option)=>{
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero ';
                }
                return true;
            })
            .argv;

module.exports = argv;