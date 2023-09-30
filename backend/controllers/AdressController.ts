import { Request, Response } from 'express';
import { Adress } from '../models/Adress';

class AdressController {
  public static async create(req: Request, res: Response): Promise<void> {
    try {
      const { id:UserId, street, number, city } = req.body;

      const adress = {
        UserId,
        street,
        number,
        city,
      };

      await Adress.create(adress);

      res.status(200).json({ message: 'Address created successfully' });
    } catch (error) {
      console.error('Error creating address:', error);
      res.status(500).json({ message: 'Error creating address' });
    }
  }

  public static async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.body;

      await Adress.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({ message: `Address ${id} deleted successfully` });
    } catch (error) {
      console.error('Error deleting address:', error);
      res.status(500).json({ message: 'Error deleting address' });
    }
  }

  public static async listAdress(req: Request, res: Response): Promise<void> {
    try {
      const addresses = await Adress.findAll({ raw: true });
      res.status(200).json(addresses);
    } catch (error) {
      console.error('Error fetching addresses:', error);
      res.status(500).json({ message: 'Error fetching addresses' });
    }
  }
}

export default AdressController;