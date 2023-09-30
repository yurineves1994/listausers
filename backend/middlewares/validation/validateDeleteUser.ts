import { Request, Response, NextFunction } from 'express';

const validateDeleteUser = (req: Request, res: Response, next: NextFunction): void => {
  const { id } = req.body;
  
  if (!Number.isInteger(id)) {
    res.status(400).json({ message: 'O parâmetro "id" deve ser um número inteiro válido.' });
    return;
  }
  
  next();
};

export { validateDeleteUser };
