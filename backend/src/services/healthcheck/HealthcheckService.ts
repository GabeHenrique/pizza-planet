import {prismaClient} from "../../prisma";

export class HealthcheckService {
  async execute() {
    return {
      status: 'OK',
      message: "Project running!",
      node_version: process.version
    }
  }
}