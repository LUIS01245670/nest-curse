import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { json } from 'stream/consumers';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("value"+JSON.stringify(value)) 
   const agenumber= parseInt(value.age.toString(),10)
   if(isNaN(agenumber)){//me pasaron el dato como un texto
  throw new HttpException('la edad deberia ser un numero',HttpStatus.BAD_REQUEST)//HttpStatus.BAD_REQUEST para especificar que es un dato erroneo
   }
    return {...value,age:agenumber};
  }
}
//espera un valor valor a pasar en este caso el eobjeto de los valores de query propiedad metadata para obtener mas informacion