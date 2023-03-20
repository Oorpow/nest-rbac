import { Injectable } from '@nestjs/common'

import { RoleService } from 'src/role/role.service'
import { UserService } from 'src/user/user.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly roleService: RoleService,
  ) {}

  async hasPermission(userId: number, permissionName: string) {
    const user = await this.userService.findOne(userId)
    const { password, ...result } = user
    const { permissions } = await this.roleService.findOne(result.role.id)

    if (permissions && permissions.find((p) => p.name === permissionName)) {
      return true
    }
    return false
  }
}
