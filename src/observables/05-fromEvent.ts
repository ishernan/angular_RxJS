import { fromEvent } from "rxjs";


/**
 * formEvent permite crear observables en base à events Targets. 
 * podemos obsrvar los 'eventos' en el DOM
 */

// const test = fromEvent( document, 'click')
// test.subscribe({ 
//     next: next => console.log('Next: ', next), 
//     error: error => console.warn('Error: ', error), 
//     complete: () => console.log('COMPLETE')
// });



const src1$ = fromEvent<PointerEvent>( document, 'click')
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup')

// const observer = {
//     next: (valor)=> console.log('next', valor)
// };

//src1$.subscribe(observer);

// src1$.subscribe(e => { MANERA CLASICA
//     console.log('x :', e.x)
//     console.log('y :', e.y)
// });

src1$.subscribe(({x,y}) =>{ //DESESTRUCTURACION-OTRZ OPCION DE LO MISMP
    console.log('x:',x,' ', 'y:',y)
})

src2$.subscribe((e) => {
    console.log(e.key)
});
