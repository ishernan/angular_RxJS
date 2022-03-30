import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";


/**
 * un operador permite modificar el flujo de informacion
 * pipe es un metodo de los observadores que permite conectar los operadores
 * map recibe en argumento el valor que emite el observable
 */

// range(1,5).pipe(
//     map<number, number>( valor => (valor * 10) )
// )
// .subscribe(console.log)

range(1,5).pipe(
    map<number, string>( valor => (valor * 10).toString() )
)
.subscribe(console.log)

//OTRO EJEMPLO
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup' ); 

const keyupCode$ =keyup$.pipe(
    map( event => event.code )
);

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI') //pluck utilisa strings para acceder a un obj dentro 
    //de un obj. Pluck es util para trabajar con objetos anidados
); 



keyup$.subscribe(console.log)
keyupCode$.subscribe( valor => console.log('map', valor)); 
keyupPluck$.subscribe( valor => console.log('pluck', valor)); 