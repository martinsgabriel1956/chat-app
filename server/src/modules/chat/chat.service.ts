import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { ChatRepository } from 'src/shared/database/repositories/chat.repositories';

@Injectable()
export class ChatService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly chatRepository: ChatRepository,
  ) {}
  async create(createChatDto: CreateChatDto) {
    const { userId, friendName } = createChatDto;

    const friendUser = await this.userRepository.findFirst({
      where: {
        name: friendName,
      },
    });

    if (!friendUser) {
      throw new Error('User not found');
    }

    await this.chatRepository.create({
      data: {
        friendName,
        userId,
      },
    });
  }

  findAll(id: string) {
    const chats = this.chatRepository.findMany({
      where: {
        userId: id,
      },
    });

    return chats;
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
