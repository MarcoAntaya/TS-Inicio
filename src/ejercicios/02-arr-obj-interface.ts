
//Siempre es bueno especificar el tipo de datos incluso en los arrays

let habilidades: string[] = ['Bash', 'Counter', 'Healing'];


interface Personaje {
    nombre: string;
    hp : number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Marco',
    hp: 100,
    habilidades: ['Bash','Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table( personaje );
