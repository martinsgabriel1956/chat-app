import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UsersRepository) {}
  async findAll() {
    const users = await this.userRepository.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        avatarUrl: true,
        status: true,
      },
    });

    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update({
      where: {
        id,
      },
      data: {
        ...updateUserDto,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
