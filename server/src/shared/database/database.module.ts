import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repositories';
import { MessagesRepository } from './repositories/messages.repositories';
import { ChatRepository } from './repositories/chat.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    MessagesRepository,
    ChatRepository,
  ],
  exports: [UsersRepository, MessagesRepository, ChatRepository],
})
export class DatabaseModule {}
