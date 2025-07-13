import UserModel from "../models/userModels.js";

class UserRepository {
  async create(data) {
    return await UserModel.create(data);
  }

  async findByEmail(email) {
    return await UserModel.findOne({ email });
  }

  async update(user) {
    return await UserModel.save();
  }
}
export default UserRepository;