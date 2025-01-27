import {Request, Response} from "express";
import {HealthcheckService} from "../../services/healthcheck/HealthcheckService";

export class HealthcheckController {
  async handle(req:Request, res: Response) {
    const healthCheckService = new HealthcheckService();
    const healthCheck = await healthCheckService.execute();
    return res.json(healthCheck);
  }
}