import {body, validationResult} from 'express-validator';
import {NextFunction, Request, Response} from 'express';

export const isValidUser = [
  body('email').isEmail().withMessage('Endereço de email inválido'),
  body('password').isLength({min: 8, max: 16}).withMessage('Senha deve conter entre 8 e 16 caracteres'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }
    next();
  }
];
