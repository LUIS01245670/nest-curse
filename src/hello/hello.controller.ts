import { Controller, Get, HttpCode, Param, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import {Request,Response} from 'express'
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthsGuard } from './guards/auths/auths.guard';
@Controller()
export class HelloController {
@Get('/')
index(@Req() req:Request,@Res() res:Response){
    res.status(200).json({
        message:'hello world'
    })
}
@Get('notfound')
@HttpCode(404)
notFoundpage(){
    return '404 not found'
}
@Get('ticket/:num')//estos son pipes nativos
getNumber(@Param('num',ParseIntPipe) num:number){
    return num + 10
}
@Get('error')
@HttpCode(500)
errorpage(){
return 'error router'
}// en caso de que suseda un error inesperado puedo colocar elgunos de  estos metos en el cachat para que me envie es estatus especificado al front

//pipes personalisados
@Get('greet')
@UseGuards(AuthsGuard)
greet(@Query(ValidateuserPipe) query:{name:string,age:number}){//validateuserpipe va recibir el valor del objeto query
    console.log(typeof query.age)
    console.log(typeof query.name)
return `Hello ${query.name}, tu edad es ${query.age} años`
}
}
