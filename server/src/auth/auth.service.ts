import { Injectable } from '@nestjs/common';
import { AuthDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  login(body: AuthDTO) {}
}
