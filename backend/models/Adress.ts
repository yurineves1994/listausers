import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/conm';
import { User } from './User';

class Adress extends Model {
  public id!: number;
  public street!: string;
  public number!: string;
  public city!: string;
  public UserId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Adress.init(
  {
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // Passa a instância do sequelize
    modelName: 'Adress',
  }
);

User.hasMany(Adress);
Adress.belongsTo(User);

export { Adress };