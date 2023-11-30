import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createUserDTO: Prisma.UserCreateArgs) {
    return this.prismaService.user.create(createUserDTO);
  }

  findUnique(findUniqueDto: Prisma.UserFindUniqueArgs) {
    console.log({ user: this.prismaService });
    return this.prismaService.user.findUnique({
      where: findUniqueDto.where,
      select: findUniqueDto.select,
    });
  }
}
