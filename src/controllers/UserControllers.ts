import { Request, Response } from "express";
import { UserLogin } from "../models/UserLogin.Model";

class UserControler {
  async createLogin(req: Request, res: Response) {
    const { name, cpf, birthDate, email, password } = req.body;

    const userLogin = await UserLogin.create({
      name,
      cpf,
      birthDate,
      email,
      password,
    });

    if (!userLogin) {
      return res.status(400).json({ message: "Está faltando alguns dados" });
    }

    return res
      .status(201)
      .json({ userLogin, message: "Login criado com sucesso" });
  }
}

export default new UserControler();
