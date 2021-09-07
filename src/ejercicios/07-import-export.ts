import { calculaISV, Producto } from "./06-desestructuracion-funcion";


const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 1200
    },
    {
        desc: 'Telefono 2',
        precio: 1500
    }
];

const [total, isv] = calculaISV( carritoCompras);

console.log( 'Total: ' , total);
console.log( 'ISV: ', isv);