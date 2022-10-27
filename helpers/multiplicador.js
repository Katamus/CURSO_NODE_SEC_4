const fs = require('fs');
const colors = require('colors');

const multiplicador = async(base = 5,listar = false, limiteMultiplicardor = 10 ) => {
    try {

        

        let textoMultiplicar = '';
        for (let index = 1; index < limiteMultiplicardor; index++) {
            textoMultiplicar += `${base} * ${index} = ${base * index}\n`;
        }

        if(listar){
            console.log("==========================".america);
            console.log("Tabla de Multiplicar del".underline.rainbow, colors.red(base));
            console.log("==========================".america);
            console.log(textoMultiplicar.red.inverse);
        }

        const titulo = `MultiplosBase${base}.txt`;
        fs.writeFileSync(`./salida/${titulo}`,textoMultiplicar);
        return titulo;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    multiplicador
}
