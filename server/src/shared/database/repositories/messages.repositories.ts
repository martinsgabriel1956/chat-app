import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MessagesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createMessageDTO: Prisma.MessageCreateArgs) {
    return this.prismaService.message.create(createMessageDTO);
  }
}
