import { inquireMenu, pausa } from './helpers/inquirer.js';

import colors from 'colors';

// const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async () => {

    let opt = '';

    do {
        opt = await inquireMenu();
        console.log( {opt} ); // esto no lo pinta bien

        if(opt !== '0') await pausa();

    } while (opt !== '0');

    console.log('Hola Mundo');


    // pausa();

};


main();




