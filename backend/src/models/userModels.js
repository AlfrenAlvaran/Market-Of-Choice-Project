import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
    otpCode: { type: String },
    otpExpires: { type: Date },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("Users", schema);
export default UserModel;
