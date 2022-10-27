const { option } = require('yargs');
const {multiplicador} = require('./helpers/multiplicador');
const argv = require('./config/yargs')


console.clear();

// console.log(process.argv);

 console.log(argv);

textoMultiplicar = multiplicador(argv['b'],argv['l'],argv['h'])
    .then((nombreArchivo)=>console.log(`Se genero el archivo "${nombreArchivo}"`))
    .catch(err=>console.log(`Se genero el error ${err}`));