import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ChatRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createChatDTO: Prisma.ChatCreateArgs) {
    return this.prismaService.chat.create(createChatDTO);
  }

  findMany(findManyDto: Prisma.ChatFindManyArgs) {
    return this.prismaService.chat.findMany(findManyDto);
  }
}
