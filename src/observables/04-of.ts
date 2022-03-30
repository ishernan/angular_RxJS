import { of }from 'rxjs'; 

/**
 * el operador of nos permite crear observables en base a un listado de elementos
 * los valores son emitidos en secuencia uno por uno de manera sincrona
 * cuando emite el ultimo valor, automaticameente se completa el observable
 */
//const obs$ = of(1,2,3,4,5); 
const obs$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true) ); 

obs$.subscribe({
    next:  next => console.log('next :', next),
    error: null,
    complete: ()=> console.log('Terminado')
}); 



// obs$.subscribe({ 
//     next: next => console.log('Next: ', next), 
//     error: error => console.warn('Error: ', error), 
//     complete: () => console.log('COMPLETE')
// });