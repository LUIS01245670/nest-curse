//los dto nos servira para poder tener auto completado y analisis de errores en typescript
import{
IsString, MinLength
} from 'class-validator'
export class tasks {
    @IsString()
    @MinLength(1)
    title:string
    @IsString()
    @MinLength(1)
    descriction:String
    id?:number
}
