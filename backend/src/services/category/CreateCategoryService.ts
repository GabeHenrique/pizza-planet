import {prismaClient} from "../../prisma";

export type CategoryRequest = {
  name: string
}

export class CreateCategoryService {
  async execute({name}: CategoryRequest) {
    name = formatNameToPascalCase(name);
    await VerifyIfCouldCreate(name);
    return prismaClient.category.create({
      data: {name},
      select: {
        id: true,
        name: true
      }
    });
  }
}

function formatNameToPascalCase(name: string) {
  return name
    .split(" ")
    .map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
    .join(" ")
}

async function VerifyIfCouldCreate(name: string) {
  const categoryAlreadyExists = await prismaClient.category.findFirst({
    where: {
      name: name
    }
  });
  if (categoryAlreadyExists) {
    throw new Error("Category already exists")
  }

  if (!name) {
    throw new Error("Invalid name");
  }
}