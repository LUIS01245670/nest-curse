import { Injectable, Query ,HttpCode, BadRequestException, NotFoundException} from "@nestjs/common";
import {tasks} from './dto/create-task-dto'
import { updatetaskdto } from "./dto/update-task-dto";





@Injectable()
export class TasksService{
    private tareas:tasks[]=[
       
    ]

    
    getAllTasks():tasks[]{
        
        return this.tareas

        
     }

     gettask(id:number){
      //  try {
            const tarea= this.tareas.find(task => task.id ==id)
            if(!tarea){
              return   new NotFoundException ('la tarea con ese id no fue encontrada')
             // return new error ('task not found')
            }
  
            return tarea
       // } catch (error) {
        //    console.log(error)
        //}
        
     }

     createtask(task:tasks){
        this.tareas.push({...task,id:this.tareas.length+1})
        return task
     }


     updatetask(task:updatetaskdto){
     return 'actulizando tareas'
     }

     updatetaskstatus(){
        return 'actulizando estatus'

     }

     deletetask(){
        return 'eliminando tareas'
     }
}