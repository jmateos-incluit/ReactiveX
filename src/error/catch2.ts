import { throwError, catchError, of } from 'rxjs';

const erroSource = throwError(() => {
    const error: any = new Error(`Creamos nuestro error`);
    error.timestamp = Date.now();
    return error;
  });

const errorExample = erroSource.pipe(catchError((error) => of(`${error}`)))
errorExample.subscribe(x=>console.log(x))