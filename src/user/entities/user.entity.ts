import { Role } from 'src/role/entities/role.entity'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  //   一个用户对应一个角色，一个角色对应多个用户
  @ManyToOne(() => Role, (role) => role.user)
  @JoinColumn({ name: 'roleId' })
  role: Role
}
