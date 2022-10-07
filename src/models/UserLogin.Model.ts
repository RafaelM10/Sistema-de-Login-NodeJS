import { DataTypes, Model } from "sequelize";
import db from "../config/database/db";

interface IUserLogin extends Model {
  id: string;
  name: string;
  cpf: string;
  birthDate: string;
  email: string;
  password: string;
}

export const UserLogin = db.define<IUserLogin>("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
