import { Module} from '@nestjs/common'
import {Taskcontroller} from './tasks.controller'
import { TasksService } from './tasks.service'
@Module({
    controllers:[Taskcontroller],
    providers:[TasksService]//si vamos utilizar un servieces en cada modulo el serivece deve ir en provider

})
export class Taskmodule {
 
}