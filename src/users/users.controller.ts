import { Body, Controller, Get ,Patch,Post,Put, UsePipes, ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateuserDto } from './dto/create-user-dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
    constructor(private userser:UsersService ){

    }
    @ApiTags('users')//para separar mis rutas en mi documentacion
    @Get()
    getusers():Promise<any[]>{
    return this.userser.getusers()
    }
    @ApiTags('users')
    @Post()
   // @UsePipes(new ValidationPipe())
    createuser(@Body() user:CreateuserDto){
        return  this.userser.createuser(user)
    }


   
    
}
