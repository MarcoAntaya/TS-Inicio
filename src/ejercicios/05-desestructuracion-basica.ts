

//Desestructuración de Objetos

interface Reporductor {

    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio : number;
}

const reproductor: Reporductor = {
    volumen: 90,
    segundo: 30,
    cancion: 'Houl in my soul',
    detalles: {
        autor:'Aerosmith',
        anio: 2012
    }
}

const autor = 'Fulano';
//Opcional
// const { volumen, segundo, cancion, detalles: { autor } } = reproductor;

//Se puede usar este método....
const { volumen, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor;

//Pero se recomienda este.
// const { autor } = detalles;


// console.log('El volumen actual es de : ', volumen);
// console.log('El segundo actual es de : ', segundo);
// console.log('La canción actual es de : ', cancion);
// console.log('El autor actual es : ', autorDetalle);


//Desestructuración de Arreglos / Arrays

const dbz: string[] = ['Goku', 'Vegueta', 'Trunks'];

const [ , , p3 ] = dbz;
// console.log('Personaje 1: ', p1);
// console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);