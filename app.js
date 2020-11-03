const arg = require('./config/yargs').arg;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
const { actualizar } = require('./por-hacer/por-hacer');

let comando = arg._[0];

switch (comando) {
    case 'crear':
        console.log('Crear por hacer');
        let tarea = porHacer.crear(arg.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        console.log('Listar por hacer');
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('======PorHacer======='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('====================='.green);
        }
        break;

    case 'actualizar':
        console.log('Actualiza por hacer');
        let actualizado = porHacer.actualizar(arg.descripcion, arg.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(arg.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
}