import {NextFunction, Request, Response} from "express";
import {verify} from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }
  const auth = authToken.split(" ")[1];

  try {
    const {sub} = verify(auth, process.env.JWT_SECRET) as Payload;
    req.user_id = sub;
    return next();
  } catch (err) {
    return res.status(401).end();
  }
}