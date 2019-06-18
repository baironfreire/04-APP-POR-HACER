const descripcion = {
    demand: true,
    alias: '-d',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    emand: true,
    alias: '-c',
    esc: 'Marca como completado la tarea'
}

const argv = require('yargs')
    .command('crear', "Crear un elemento por hacer", {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}

//TODO : comando crear un elemento por hacer

//TODO : comando actualizar un