import { customResponse } from "../../../utils/Response";
import { PrismaClient } from "@prisma/client";
const { default: JWTService } = require("../../services/jwtservice");
import { ZodError, z } from "zod";
import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import ms from "ms";
import jwt from "jsonwebtoken"
import config from "../../config/env.config";
const prisma = new PrismaClient();
const loginController = {
  async login(req, res, next) {
    try {
      const { email, password } = await req.body;
      let user;
      user = await prisma.user.findUniqueOrThrow({
        where: {
          email: email,
        },
      });

      if (!user) {
        return next(createError.Unauthorized("Verify your Credentials"));
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return next(createError.Unauthorized("Verify your Credentials"));
      }
   
      delete user.password;
      delete user.email;
      const jwtPayload = {
        id: user.id,
        username: user.username,
      };
      const accessToken = jwt.sign(
        user.id,
        process.env.USER_ACCESS_SECRET
      )

      res.cookie("accessToken", accessToken, {

        maxAge: ms("30m"),
        httpOnly: true,
      });

      res.json(customResponse(200, { accessToken }));
    } catch (err) {
      console.log(err);
      if (err instanceof ZodError) {
        return next({
          status: createError.InternalServerError().status,
          message: err.issues,
        });
      }
      return next(createError.InternalServerError());
    }
  },

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      await prisma.refreshTokens.delete({
        where: {
          token: refreshToken,
        },
      });
      res.clearCookie("refreshToken");
      res.clearCookie("accessToken");
      res.json(customResponse(200, "Logged Out successfully"));
    } catch (err) {
      return next(createError.InternalServerError());
    }
  },
};
export default loginController;
