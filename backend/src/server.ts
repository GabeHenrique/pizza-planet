import express, {NextFunction, Request, Response} from "express";
import "express-async-errors";
import {router} from "./routes";
import dotenv from "dotenv";
import cors from "cors";
import path from 'path';

dotenv.config()

const app = express();
app.use(express.json());
app.use(cors())

app.use(router);
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'temp'))
);
const serverPort = process.env.PORT || 2565;

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

  const status = convertStringToNumber(err.name);

    return res.status(status).json({
      status: status,
      message: err.message
    })
});

app.listen(serverPort, () => console.log(`Server running on port ${serverPort}`));

function convertStringToNumber(stringValue: string): number {
  const regex: RegExp = /^\d+$/;
  if (regex.test(stringValue)) {
    // @ts-ignore
    return stringValue as number;
  }
  return 500;
}