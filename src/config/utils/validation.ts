import { cpf } from "cpf-cnpj-validator";
import * as EmailValidator from "email-validator";

export function validateCpf(value: string, msg: string) {
  const validate = cpf.isValid(value);
  if (!validate) throw msg;
}

export function validateEmail(value: string, msg: string) {
  const validateEmail = EmailValidator.validate(value);
  if (!validateEmail) throw msg;
}
