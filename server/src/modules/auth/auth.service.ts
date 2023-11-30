import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { SignInDTO } from './dto/sign-in.dto';
import { SignUpDTO } from './dto/sign-out.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(signInDTO: SignInDTO) {
    const { email, password } = signInDTO;

    const user = await this.userRepository.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordsMatches = await compare(password, user.password);

    if (!passwordsMatches) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = await this.generateAccessToken(user.id);

    return { accessToken };
  }
  async signUp(signUpDTO: SignUpDTO) {
    const { name, email, password } = signUpDTO;

    const emailTaken = await this.userRepository.findUnique({
      where: { email },
      select: { id: true },
    });

    if (emailTaken) {
      throw new ConflictException('This e-mail is already in use.');
    }

    const hashedPassword = await hash(password, 12);

    const user = await this.userRepository.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const accessToken = await this.generateAccessToken(user.id);

    return { accessToken };
  }

  private generateAccessToken(userId: string) {
    return this.jwtService.signAsync({ sub: userId });
  }
}
