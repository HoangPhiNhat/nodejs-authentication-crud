import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { signInValidator, signUpValidator } from "../validations/auth.js";
console.log(process.env.SECRET_CODE);
const { SECRET_CODE } = process.env;
export const signUp = async (req, res) => {
  try {
    const { error } = signUpValidator.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({ message: errors });
    }
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.status(400).json({
        message: "Email đã tồn tại, vui lòng sử dụng email khác",
      });
    }
    const passwordEncryption = await bcrypt.hash(req.body.password, 10);
    const userAccount = await User({
      ...req.body,
      password: passwordEncryption,
    }).save();

    if (!userAccount) {
      throw new Error(`Error Sign Up`);
    }
    userAccount.password = undefined;
    return res.status(200).json({
      message: "Sign Up Success",
      data: userAccount,
    });
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message,
    });
  }
};

export const signIn = async (req, res) => {
  try {
    const { error } = signInValidator.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({ message: errors });
    }
    const userExists = await User.findOne({ email: req.body.email });
    if (!userExists) {
      return res.status(400).json({
        message: "Email không tồn tại trên hệ thống",
      });
    }
    const passwordDecrypt = await bcrypt.compare(
      req.body.password,
      userExists.password
    );
    if (!passwordDecrypt) {
      return res.status(400).json({
        message: "Sai mật khẩu, vui lòng thử lại ",
      });
    }
    const accessToken = jwt.sign({ _id: userExists._id }, SECRET_CODE,{ expiresIn: "1d" });

    userExists.password = undefined;
    return res.status(200).json({
      message: "Sign In Success",
      data: userExists,
      accessToken,
    });
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message,
    });
  }
};
