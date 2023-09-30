import { Request, Response } from 'express';
import { User } from '../models/User';
import { Adress } from '../models/Adress';

class UserController {
  public static async create(req: Request, res: Response): Promise<void> {
    try {
      const { name, occupation, newsletter } = req.body;

      await User.create({
        name,
        occupation,
        newsletter,
      });

      res.status(200).json({ message: 'Usuario Cadastrado!' });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Error creating user' });
    }
  }

  public static async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.body;

      await User.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({ message: `User ${id} deleted successfully` });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Error deleting user' });
    }
  }

  public static async editUser(req: Request, res: Response): Promise<void> {
    const id = req.params.id;

    try {
      const user = await User.findOne({
        include: Adress,
        where: {
          id,
        },
      });

      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }

      res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Error fetching user' });
    }
  }

  public static async update(req: Request, res: Response): Promise<void> {
    try {
      const { id, name, occupation, newsletter } = req.body;

      const userData = {
        id,
        name,
        occupation,
        newsletter,
      };

      await User.update(userData, {
        where: {
          id,
        },
      });

      res.status(200).json({ message: 'usuario atualizado!' });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Error updating user' });
    }
  }

  public static async findOne(req: Request, res: Response): Promise<void> {
    const id = req.params.id;

    try {
      const user = await User.findOne({
        raw: true,
        where: {
          id,
        },
      });

      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }

      res.render('userview', {
        user,
      });
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Error fetching user' });
    }
  }

  public static async listUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await User.findAll({
        raw: true,
      });

      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Error fetching users' });
    }
  }
}

export default UserController;