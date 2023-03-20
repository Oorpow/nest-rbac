import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserModule } from 'src/user/user.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/user/entities/user.entity'
import { Role } from 'src/role/entities/role.entity'
import { Permission } from 'src/permission/entities/permission.entity'
import { RoleModule } from 'src/role/role.module'

@Module({
  imports: [
    UserModule,
    RoleModule,
    TypeOrmModule.forFeature([User, Role, Permission]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
