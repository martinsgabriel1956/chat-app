import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createUserDTO: Prisma.UserCreateArgs) {
    return this.prismaService.user.create(createUserDTO);
  }

  findUnique(findUniqueDto: Prisma.UserFindUniqueArgs) {
    return this.prismaService.user.findUnique({
      where: findUniqueDto.where,
      select: findUniqueDto.select,
    });
  }
}
