const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hace');

const colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'crear':
        console.log("crear por hacer");
        let tarea = porHacer.crear(argv.descripcion);
        console.log("tarea", tarea);
        break;
    case 'listar':
        console.log("Mostrar todas las tareas por hacer");
        let listTask = porHacer.findAll();
        for (let task of listTask) {
            console.log('=======Por Hacer =========='.green);
            console.log(task.descripcion);
            console.log('Estado:', task.completado);
            console.log('==========================='.green);
        }
        break;
    case 'actualizar':
        console.log("Actualizar una tarea por hacer");
        let updated = porHacer.update(argv.descripcion, argv.completado);
        console.log(updated);
        break;
    case 'borrar':
        let deleted = porHacer.borrar(argv.descripcion);
        console.log(deleted)
        break;

    default:
        console.log('Comando no es reconocido');
}