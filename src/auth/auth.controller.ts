import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('permission')
  async hasPermission(@Body() body) {
    const { userId, permissionName } = body
    return this.authService.hasPermission(userId, permissionName)
  }
}
