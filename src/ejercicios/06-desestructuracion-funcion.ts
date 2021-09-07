

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Samsumg S20',
    precio: 2100
}

const tablet: Producto = {
    desc: 'Tablet S7',
    precio: 2500
}

export function calculaISV ( productos: Producto[] ): [number, number] {

    let total = 0;

    productos.forEach( ({ precio } ) =>{
        total += precio;
    })

    return [total, total * 0.15];
}

const articulos = [ telefono, tablet ];

const [total, isv] = calculaISV( articulos );

console.log('Total: ', total);
console.log('ISV: ', isv);