import { Module } from '@nestjs/common';
import {Taskmodule} from './tasks/tasks.module'
import { ProyectsModule } from './proyects/proyects.module';
import { AuthModule} from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [Taskmodule, ProyectsModule,AuthModule, UsersModule, PaymentsModule],
  controllers: [HelloController],
  
})
export class AppModule {}
