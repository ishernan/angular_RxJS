import { Observable, Observer, Subject } from "rxjs";

//una interfaz que me obliga a establecer lo que se necesita para que la variable
//que especifico sea un observer valido
const observer : Observer<any> = { 
    next: value => console.log('next :', value),
    error: error => console.warn('error :', error),
    complete: () => console.info('completed ')
    
};
const intervalo$ = new Observable<number>( subs => {
    const intervalID = setInterval( 
        () => subs.next(Math.random()), 1000
    );    
    return () => {
        clearInterval(intervalID)
        console.log('Intervalo destruido')
    }; 
});

/** Subject
 * 1-Casteo multiple: muchas subscripcione pueden estar sujetas al mismo observable (subjet)
 * 2- Permite asi distribuir la misma info a todos los lugares que se subscribieron
 * 3- Es tambien un observer: puede emitir valores. Un subject nos permite transformar un coldObservable en HotObservable
 * 3- Tambien permite manejo de next, error y complete 
 */
const subject$ = new Subject<any>(); 
const subscription = intervalo$.subscribe(subject$); //no olvidar que para que el observable trabaje necesita un subscribe
// subject$ distribuye la misma info a quienes se subscriben

// const subs1 = subject$.subscribe(random=> console.log('subs1', random))
// const subs2 = subject$.subscribe(random=> console.log('subs2', random))
const subs1 = subject$.subscribe(random=> console.log('subs1', random))
const subs2 = subject$.subscribe(random=> console.log('subs2', random))


setTimeout(() => {
    subject$.next(10); //como es tambien un observer puede emitir un valor (next)
    //permite insertar info al flujo de datos que el observable esta emitiendo. 
    subject$.complete(); 
    
    subscription.unsubscribe(); 

}, 2500); 

// const subs1 = intervalo$.subscribe(s => {
//     console.log(s)
// })
// const subs1 = intervalo$.subscribe(random=> console.log('subs1', random))
// const subs2 = intervalo$.subscribe(random=> console.log('subs2', random))
