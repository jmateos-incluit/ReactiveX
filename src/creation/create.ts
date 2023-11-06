import { Observable } from 'rxjs';

const obs = Observable.create((observer)=>{
    observer.next("Hola");
    observer.next("Mundo");
    observer.complete();
});

obs.subscribe((value:any)=>{
    console.log("suscriber 1")
    console.log(value)
})


obs.subscribe((value:any)=>{
    console.log("suscriber 2")
    console.log(value)
})