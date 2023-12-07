import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createUserDTO: Prisma.UserCreateArgs) {
    return this.prismaService.user.create(createUserDTO);
  }

  findMany(findManyDto: Prisma.UserFindManyArgs) {
    return this.prismaService.user.findMany(findManyDto);
  }

  findFirst(findFirstDto: Prisma.UserFindFirstArgs) {
    return this.prismaService.user.findFirst(findFirstDto);
  }

  findUnique(findUniqueDto: Prisma.UserFindUniqueArgs) {
    return this.prismaService.user.findUnique({
      where: findUniqueDto.where,
      select: findUniqueDto.select,
    });
  }

  update(updateUserDTO: Prisma.UserUpdateArgs) {
    return this.prismaService.user.update(updateUserDTO);
  }

  changeStatus(userId: string, status: 'ONLINE' | 'OFFLINE') {
    return this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        status,
      },
    });
  }
}
