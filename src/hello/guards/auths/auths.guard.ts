import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthsGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,//context es la informacion de toda nuestra aplicaion 
  ): boolean | Promise<boolean> | Observable<boolean> {
    //vamos a obtener el request 
    const request=context.switchToHttp().getRequest() as Request//va ser de tipo  request
    console.log(request.url)
    if(request.url == '/greet') return false
    return true;
  }
}//lo podemos utilizar para comprobar roles ,para saber si un usuario esta autenticado y pueda navegar a ciertas rutas
