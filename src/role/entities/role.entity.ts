import { Permission } from 'src/permission/entities/permission.entity'
import { User } from 'src/user/entities/user.entity'
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => User, (user) => user.role)
  @JoinColumn({ name: 'userId' })
  user: User

  @ManyToMany(() => Permission)
  @JoinTable()
  permissions: Permission[]
}
