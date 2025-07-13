import UserRepository from "../src/repositories/UserRepository.js";
import AppError from "../src/utils/AppError.js";
import bcrypt from "bcrypt";
class RegisterUserCommand {
  constructor() {
    this.userRepo = new UserRepository();
  }

  async execute({ fullname, email, password }) {
    if (await this.userRepo.findByEmail(email)) {
      return AppError.badRequest("Email already exist");
    }

    const hashed = await bcrypt.hash(password, 10);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000);
    const user = await this.userRepo.create({
      fullname,
      email,
      password: hashed,
      otpCode: otp,
      otpExpires,
    });

    return user;
  }
}

export default RegisterUserCommand;