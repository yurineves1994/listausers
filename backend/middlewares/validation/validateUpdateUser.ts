import { Request, Response, NextFunction } from 'express';

const validateUpdateUser = (req: Request, res: Response, next: NextFunction): void => {
  const { id, name, occupation, newsletter } = req.body;

  if (!Number.isInteger(parseInt(id))) {
    res.status(400).json({ message: 'O parâmetro "id" deve ser um número inteiro válido.' });
    return;
  }

  if (!name && !occupation && newsletter === undefined) {
    res.status(400).json({ message: 'Pelo menos um dos campos "name", "occupation" ou "newsletter" deve ser fornecido para atualização.' });
    return;
  }

  next();
};

export { validateUpdateUser };
