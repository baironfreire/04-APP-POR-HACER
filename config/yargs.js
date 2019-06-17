const argv = require('yargs')
    .command('crear', "Crear un elemento por hacer", {
        descripcion: {
            demand: true,
            alias: '-d',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: '-d',
            desc: 'Descripción de la tarea por hacer'
        },
        completado: {
            demand: true,
            alias: '-c',
            esc: 'Marca como completado la tarea'
        }
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion: {
            demand: true,
            alias: '-d',
            desc: 'Descripción de la tarea por hacer'
        },

    })
    .help()
    .argv;

module.exports = {
    argv
}

//TODO : comando crear un elemento por hacer

//TODO : comando actualizar un