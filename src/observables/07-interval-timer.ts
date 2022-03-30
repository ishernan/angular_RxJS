import { interval, timer } from "rxjs"


const observer = {
    next: valor => console.log('next', valor),
    complete: ()=> console.log('complete'), 
} 


const hoyEn5 = new Date(); 
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5)

const interval$ = interval(1000); 
const timer$ = timer(hoyEn5)//se programa el momento en que se emite el valor

console.log('inicio')
//interval$.subscribe( observer ); 
timer$.subscribe( observer ); 
console.log('fin')
