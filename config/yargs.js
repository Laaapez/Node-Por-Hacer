const { argv } = require('yargs');


const opt1 = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
}

const opt2 = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}
const arg = require('yargs')
    .command(
        'crear',
        'Crea un elemento por hacer',
        opt1
    )
    .command(
        'actualizar',
        'Actualiza el estado completado de una tarea',
        opt2
    )
    .command(
        'borrar',
        'Borra el dato determinado',
        opt1
    )
    .help()
    .argv;

module.exports = {
    arg
}