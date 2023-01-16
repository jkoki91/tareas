import { inquireMenu, pausa, leerInput } from './helpers/inquirer.js';

import colors from 'colors';
import { Tarea } from './models/tarea.js';
import { Tareas } from './models/tareas.js';

// const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    do {
        opt = await inquireMenu();
        
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc)
                break;
            case '2':
                console.log(tareas.listadoArr);
                break;
            
        }

        if(opt !== '0') await pausa();

    } while (opt !== '0');

    // pausa();

};


main();




