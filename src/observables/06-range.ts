import { of, range } from 'rxjs';

//const src$ = of(1,2,3,4,5)
const src$ = range(1,5); //emite 5 valores consecutivos. 
//Es un rango entre un valor inicial y uno final
//El valor inicial por defecto es 0


console.log('inicio')
src$.subscribe(console.log);
console.log('fin')