import { Observable, Observer } from "rxjs";

//una interfaz que me obliga a establecer lo que se necesita para que la variable
//que especifico sea un observer valido
const observer : Observer<any> = { 
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completed [obs]')
    
};

const obs$ = new Observable<string>( subs => { 
//creation d'un observable. Dans l'observable on a un objet, un subscriber
// le parametre "subs" ainsi es de type subscriber. 
// Cette declaration va me permettre de creer de subscriptions
// las subscripciones son eventos que estan pendientes de lo que emiten los observables

subs.next('cachaste?'); 
subs.next('andai vivo?'); 
subs.next('que huea?'); 
//next emite el valor deseado a las instancias que esten subscritas al evento

// const a = undefined; //forzar un error
// a.nombre = 'Isaac'; 

subs.complete(); // esto termina el proceso y no se deja de emitir

}); 

//para que un observable se ejecute tiene que tener une subscripcion. 
obs$.subscribe(observer)

//obs$.subscribe( console.log) 
// obs$.subscribe( response => {
//     console.log(response) 
// })

//DEPRECATED
// obs$.subscribe(
//     valor => console.log('next:', valor),
//     error => console.warn('error:', error),
//     () => console.info( 'Completed')
//     );

// obs$.subscribe({ 
//     next: next => console.log('Next: ', next), 
//     error: error => console.warn('Error: ', error), 
//     complete: () => console.log('COMPLETE')
// });

