import jwt from "jsonwebtoken";
import { UserModel } from "../models/userModel.js";

export const jwtsecretKey = "kjjdkdgkjdfvhjhjkhjfkjk";
export const generateToken = async (user) => {
  try {
    const token = jwt.sign(user, jwtsecretKey);
    return token;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const decodeJWT = async (token) => {
  try {
    const decoded = await jwt.verify(token, jwtsecretKey);

    if (!decoded && !decoded._id) {
      console.log("invalid token detected!!!");
      return null;
    }
    const userId = decode._id;
    const foundUser = await UserModel.findById(userId);
    return foundUser;
  } catch (error) {
    console.log(error);
  }
};
