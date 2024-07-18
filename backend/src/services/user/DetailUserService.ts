import {prismaClient} from "../../prisma";

export class DetailUserService {
  async execute(userId: string) {
    return prismaClient.user.findFirst({
      where: {
        id: userId
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    });
  }
}