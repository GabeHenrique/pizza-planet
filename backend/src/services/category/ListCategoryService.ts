import {prismaClient} from "../../prisma";

export class ListCategoryService {
async execute() {
  return prismaClient.category.findMany({
    select: {
      id: true,
      name: true
    }
  });
}
}