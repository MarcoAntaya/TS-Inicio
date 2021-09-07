

class PersonaNormal {
    
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}


class Heroe extends PersonaNormal {
    // alterEgo: string;
    // edad: number;
    // nombreReal: string;

    // imprimirNombre() {
    //     return this.alterEgo + ' ' + this.nombreReal; 
    // }

    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
        ) {
            super( alterEgo, 'New York, USA' );
        }
    

}

const ironman = new Heroe('Ironman', 45, 'Tony');

console.log( ironman );