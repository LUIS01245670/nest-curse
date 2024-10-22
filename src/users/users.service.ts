import { Injectable } from '@nestjs/common';
import { CreateuserDto } from './dto/create-user-dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
   constructor (private prisma:PrismaService){

   }


    

    getusers(){
        return this.prisma.user.findMany();//quiero traer todos los datos que vengan de mysql
    }

    createuser(user:CreateuserDto){
     return this.prisma.user.create({data: user})//usuario que voy acreae
    }

}
