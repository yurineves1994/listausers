import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/conm';

class User extends Model {
  public id!: number;
  public name!: string;
  public occupation!: string;
  public newsletter!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    occupation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    newsletter: {
      type: DataTypes.BOOLEAN,
      allowNull: false, // Alterado para allowNull em vez de required
    },
  },
  {
    sequelize, // Passa a instância do sequelize
    modelName: 'User',
  }
);

export { User };