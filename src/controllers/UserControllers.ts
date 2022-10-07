import { Request, Response } from "express";
import { validateCpf, validateEmail } from "../config/utils/validation";
import { UserLogin } from "../models/UserLogin.Model";

class UserControler {
  async createLogin(req: Request, res: Response) {
    const { name, cpf, birthDate, email, password } = req.body;

    try {
      validateCpf(cpf, "CPF Inválido");
      validateEmail(email, "Email Inválido");
    } catch (message) {
      return res.status(400).json({ statusCode: 400, message });
    }

    const userLogin = await UserLogin.create({
      name,
      cpf,
      birthDate,
      email,
      password,
    });

    if (!userLogin) {
      return res
        .status(400)
        .json({ statusCode: 400, message: "Está faltando alguns dados!" });
    }

    return res.status(201).json({
      statusCode: 201,
      userLogin,
      message: "Login criado com sucesso",
    });
  }
}

export default new UserControler();
