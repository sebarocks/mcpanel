
const estadoDict : { [key : string] : string }= {
    'pending'       : 'Encendiendo...',
    'running'       : 'Encendido',
    'stopping'      : 'Apagando...',
    'stopped'       : 'Apagado'
}

export function estado(statusStr : string) {
    return estadoDict[statusStr] ?? 'No disponible';
}