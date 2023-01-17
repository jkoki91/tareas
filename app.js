import { inquireMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist } from './helpers/inquirer.js';

import colors from 'colors';
import { Tarea } from './models/tarea.js';
import { Tareas } from './models/tareas.js';
import { guardarDb, leerDb } from './helpers/guardarArchivo.js';

// const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDb();

    if( tareasDB ) {
        tareas.cargarTareasFromArr( tareasDB )
    }

    do {
        opt = await inquireMenu();
        
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc)
                break;

            case '2':
                tareas.listadoCompleto();
                break;

            case '3':
                tareas.listarPendientesCompletadas(true);
                break;

            case '4':
                tareas.listarPendientesCompletadas(false);
                break;

            case '5':
                const ids = await mostrarListadoChecklist( tareas.listadoArr );
                tareas.toggleCompletadas( ids );
                break;

            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArr );
                if( id !== '0' ) {
                    const ok = await confirmar( '¿Está seguro ?');
                    if( ok ){
                        tareas.borrarTarea( id );
                        console.log('Tarea borrada');
                    }
                }
                break;
        }

        if(opt !== '0') await pausa();

        guardarDb( tareas.listadoArr );

    } while (opt !== '0');

    // pausa();

};


main();





