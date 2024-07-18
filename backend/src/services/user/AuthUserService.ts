import {prismaClient} from "../../prisma";
import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";

export interface AuthRequest {
  email: string,
  password: string
}

export class AuthUserService {
  async execute({email, password}: AuthRequest) {
    // Busca o usuário que está tentando se logar
    const user = await prismaClient.user.findFirst({
      where: {
        email: email
      },
    })

    // valida se o usuário existe e se a senha está correta
    if (!user || !await compare(password, user.password)) {
      throw new Error("Usuário e/ou senha incorretos")
    }

    // Cria o token JWT para retornar
    const token = sign(
      {
        name: user.name,
        email: user.email
      },
        process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d'
      }
    )

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token
    }
  }
}