import prisma from "../../../prisma";
import { customResponse } from "../../../utils/Response";
import { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import { z } from "zod";
const usercontroller = {
    async getUser(req, res, next) {
        try{
         const data ={
                id: req.user.id,
         }
            const user = await prisma.user.findUnique({
                where:data,
                select:{
                    id:true,
                    name:true,
                    username:true,
                    email:true,
                    picture:true,
                
                }
            })
            res.json(customResponse(200, user));
        }catch(err){
            console.log(err);
            if (err instanceof ZodError) {
                return next({
                    status: createError.InternalServerError().status,
                    message: err.issues,
                });
            }
            return next(createError.InternalServerError());
        }

    }
}
export default usercontroller;