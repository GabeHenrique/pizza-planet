import {prismaClient} from "../../prisma";
import {hash} from "bcryptjs";

export type CreateUserRequestIn = {
  name: string,
  email: string,
  password: string
}

export class CreateUserService {

  async execute({name, email, password}: CreateUserRequestIn) {
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    });

    if (userAlreadyExists) {
      throw new Error("User already exists")
    }

    password = await hash(password, 8);

    return prismaClient.user.create({
      data: {name, email, password},
      select: {
        id: true,
        name: true,
        email: true
      }
    });

  }

}
