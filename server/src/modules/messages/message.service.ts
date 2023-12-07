import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { MessagesRepository } from 'src/shared/database/repositories/messages.repositories';

@Injectable()
export class MessageService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly messagesRepository: MessagesRepository,
  ) {}
  async create(createMessageDto: CreateMessageDto) {
    const { content, userId } = createMessageDto;

    if (!userId) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const user = await this.userRepository.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const message = await this.messagesRepository.create({
      data: {
        content,
        userId,
      },
      select: {
        id: true,
        content: true,
      },
    });

    return { message };
  }

  findAll() {
    return `This action returns all messages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
