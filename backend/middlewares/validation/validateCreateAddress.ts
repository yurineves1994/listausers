import { Request, Response, NextFunction } from 'express';

const validateCreateAddress = (req: Request, res: Response, next: NextFunction): void => {
  const { street, number, city } = req.body;

  if (!street || !number || !city) {
    res.status(400).json({ message: 'Todos os campos (street, number, city) são obrigatórios.' });
    return;
  }

  next(); 
};

export { validateCreateAddress };