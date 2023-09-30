import { Request, Response, NextFunction } from 'express';

const validateFindUser = (req: Request, res: Response, next: NextFunction): void => {
  const { id } = req.params;

  if (!Number.isInteger(parseInt(id))) {
    res.status(400).json({ message: 'O parâmetro "id" deve ser um número inteiro válido.' });
    return;
  }

  next();
};

export { validateFindUser };
