import { Request, Response, NextFunction } from 'express';

const validateCreateUser = (req: Request, res: Response, next: NextFunction): void => {
  const { name, occupation } = req.body;

  if (!name || !occupation) {
    res.status(400).json({ message: 'Os campos "name" e "occupation" são obrigatórios.' });
    return;
  }

  next();
};

export { validateCreateUser };
