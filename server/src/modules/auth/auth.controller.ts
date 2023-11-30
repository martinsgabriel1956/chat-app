import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/sign-in.dto';
import { SignUpDTO } from './dto/sign-out.dto';
import { IsPublic } from 'src/shared/decorators/IsPublic';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @IsPublic()
  signIn(@Body() body: SignInDTO) {
    return this.authService.signIn(body);
  }
  @Post('signup')
  @IsPublic()
  signUp(@Body() body: SignUpDTO) {
    return this.authService.signUp(body);
  }
}
