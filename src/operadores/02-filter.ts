import { from, fromEvent, range } from 'rxjs'; 
import { map, filter } from 'rxjs/operators'


/**
 * filter filtra el elemento antes de pasar el valor al subscribe
 * en este caso el valor emitido sera el que deja pasar el filter
 * filter tiene un callback que posee 2 parametros: el valor que deja pasar al filtrar
 * y el indice de todos los elementos que escucha
 */

// range(1,10).pipe(
//     filter( valor=>  valor % 2 === 1 )
// ).subscribe(console.log)

range(1,10).pipe(
        filter( (valor, i) => {
            console.log('index', i)
            return valor % 2 === 1
        })
    ).subscribe(console.log)


    interface Personaje {
        tipo: string;
        nombre: string; 
    }

    const personajes : Personaje[] = [
        {
            tipo: 'heroe',
            nombre: 'Batman'
        },
        {
            tipo: 'heroe',
            nombre: 'Robin'
        },
        {
            tipo: 'villano',
            nombre: 'Joker'
        },
    ];

    from(personajes).pipe(
        filter( p => p.tipo === 'heroe')
    ).subscribe(console.log); 


    /**
     * los operadores se ejecutan de arriba hacia abajo
     * en este ejemplo primero tenemos el fromEvent que es el emisor de los eventos
     * luego pasa por el primer map, luego la salida pasa por el siguiente operador
     */
    const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(
        map( e => e.code ),//recibe un KeyboardEvent y envia un string
        filter( key => key === 'Enter' )//solo deja pasar el evento 'Enter' del KeyboardEvent
    );

    keyup$.subscribe(console.log)