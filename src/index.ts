import { asyncScheduler } from "rxjs";

const saludar = ()=> console.log('hola mundo')
const saludar2 = nombre=> console.log(`Hola ${nombre}` );


/**
 * asyncScheduler permite de ejecutar una funcion con un timer
 * posee 2 argumentos, la funcion y el timer, y el estado de la funcion(el parametro)
 */
//asyncScheduler.schedule( saludar2, 2000); //la fontion se ejecuta en 2 sec
//asyncScheduler.schedule( saludar2, 2000, 'Isaac'); // recibe un argumento

const subs = asyncScheduler.schedule( function(state){
    console.log('state', state)

    this.schedule( state + 1, 1000)//el valor state mas 1 casa 1 sec

}, 3000, 0); // 0 es el valor (estado) inicial. la funcion comienza a ej a los 3 sec

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 9000);

asyncScheduler.schedule( ()=> {
    subs.unsubscribe(), 6000 
} )