import { Controller, Delete, Get, Patch, Post, Put,Body, Query, Param, UsePipes, ValidationPipe} from '@nestjs/common'
import {TasksService} from './tasks.service'
import {tasks} from './dto/create-task-dto'
import { updatetaskdto } from './dto/update-task-dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
@Controller('/tasks')
@ApiTags('tasks')
export class Taskcontroller{
    constructor(private Taskservice:TasksService){

    }
@ApiOperation({summary:"obtiene las tareas"})
@Get()//por cual metodo va ser solicitado
 gettasks(@Query() query:any):tasks[]{
    console.log(query)
    return this.Taskservice.getAllTasks()
 }


 @Get('/:id')//por cual metodo va ser solicitado
 gettask(@Param('id') id:string){
    
   return  this.Taskservice.gettask(parseInt(id))
 }

 @Post()
 //@UsePipes(new ValidationPipe())//este decorador hara la validacion en caso de  la informacion no compla con lo solicitado se dara un error
 createtask(@Body() task:tasks){//el decorador body me permitirar resivir los datos de una peticion post,put a mi backend
    
 return this.Taskservice.createtask(task)
 }

 @Put()
 updatetask(@Body() tasks:updatetaskdto){
 return this.Taskservice.updatetask(tasks)
 }
 @Patch()// me diante esta llamada http no actulizamos todo sino parte de algo
 updatetasksstatus(){
    return this.Taskservice.updatetaskstatus()
 }

  @Delete()
  deletetasks(){
    return this.Taskservice.deletetask()
  }
    
 
}