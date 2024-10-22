import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';
import { PrismaService } from 'src/prisma.service';


@Module({
  controllers: [UsersController],
  providers: [UsersService,PrismaService]
})
export class UsersModule{ //implements NestModule {
 // configure(consumer: MiddlewareConsumer/*est middlewre me va permitir utlizar el Middleware creado */) {
    //  consumer.apply(LoggerMiddleware).forRoutes(/*{path:'users',method:RequestMethod.GET}/*especificamos conque rutase utlizara el middleware y que metodo contendra */'user').apply(AuthMiddleware).forRoutes('users')//las rutas que pasaran por ese middleware
  //}
}
