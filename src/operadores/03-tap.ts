import { range } from "rxjs";
import { map, tap } from "rxjs/operators";



const numeros$ = range(1,5);

numeros$.pipe(
    tap( x=> {
        console.log('antes', x)
        return 100; 
    }),
    map(valor => valor*10),
    tap( {
        next: val => console.log('despues', val),
        complete: ()=> console.log('Se termino')    
    })
    
)
.subscribe( valor => console.log('subs', valor)); 