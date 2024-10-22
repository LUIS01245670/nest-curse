import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import {Request,Response} from 'express'
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req:Request, res: Response, next: () => void) {
    const {authorization}=req.headers
    console.log(req.headers)
    if(!authorization){
      throw new HttpException('no autorizado',HttpStatus.UNAUTHORIZED)//espara enviar excepciones al fronten
    }
    if(authorization!='xzy123'){
      throw new HttpException('Forbidden',HttpStatus.FORBIDDEN)
    }
    next();
  }
}
