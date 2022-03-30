import { Observable, Observer } from "rxjs";

//una interfaz que me obliga a establecer lo que se necesita para que la variable
//que especifico sea un observer valido
const observer : Observer<any> = { 
    next: value => console.log('next :', value),
    error: error => console.warn('error :', error),
    complete: () => console.info('completed ')
    
};

const intervalo$ = new Observable<number>( subscriber => {
    let time = 0;   

    const interval = setInterval( () => {
        time++; 
        subscriber.next(time) //emite cada 2 sec el observable
        console.log(time) //la valeur de time continue a etre emitida

    }, 1000);

    setTimeout(()=> {
        subscriber.complete();
    }, 2500)

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

const subs = intervalo$.subscribe( num => console.log('Num: ', num)) // me subscribo a la emision d'info
const subs1 = intervalo$.subscribe(observer)
const subs2 = intervalo$.subscribe(observer)
const subs3 = intervalo$.subscribe(observer)

//subs1.add(subs2.add(subs3));
subs1.add(subs2);
subs2.add(subs3);

setTimeout (() => {
    subs.unsubscribe()//cancelo la subscription, dejo de observar (aunque no se deja de emitir)
   
    // subs1.unsubscribe()
    // subs2.unsubscribe()
    // subs3.unsubscribe()

    console.log('timeout completed')

}, 3000)


