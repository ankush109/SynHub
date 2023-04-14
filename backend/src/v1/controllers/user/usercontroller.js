import prisma from "../../../prisma";
import { customResponse } from "../../../utils/Response";
import { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import { z } from "zod";
const usercontroller = {
  async getUser(req, res, next) {
    try {
      const data = {
        id: req.user.id,
      };
      const user = await prisma.user.findUnique({
        where: data,
        select: {
          id: true,
          name: true,
          username: true,
          email: true,
          picture: true,
        },
      });
      res.json(customResponse(200, user));
    } catch (err) {
      console.log(err);
      return next(createError.InternalServerError());
    }
  },
  async createRooms(req, res, next) {
    try {
      const data = z.object({
        name: z.string(),
        description: z.string(),
      });
      const { name, description } = data.parse(req.body);
      const room = await prisma.room.create({
        data: {
          name,
          description,
        },
      });
      res.json(customResponse(200, room));
    } catch (err) {
      console.log(err);
      return next(createError.InternalServerError());
    }
  },
  async joinRoom(req, res, next) {
    try {
      const resp = req.body;
      const roomName = resp.roomName;

      const room = await prisma.room.findUnique({
        where: {
          name: roomName,
        },
        select: {
          id: true,
          name: true,
          description: true,
          createdAt: true,
          updatedAt: true,
          users: {
            select: {
              id: true,
              name: true,
              username: true,
              email: true,
              picture: true,
            },
          },
        },
      });
      if (!room) {
        return next(createError.NotFound("Room not found"));
      }

      room.users.push(req.user);
      res.status(200).json({
        room: room,
        message: `${req.user.name} has joined the room ${room.name}
                `,
      });
    } catch (err) {
      console.log(err);
      return next(createError.InternalServerError());
    }
  },
  async leaveRoom(req, res, next) {
    try{
        const resp = req.body;
        const roomName = resp.roomName;
        const room = await prisma.room.findUnique({
            where: {
                name: roomName
            },
            select: {
                users: {
                    select: {
                        id: true,
                        name: true,
                        username: true,
                        email: true,
                        picture: true,

                    }
                }

            }
        })
        if(!room){
            return next(createError.NotFound("Room not found"));
        }
        room.users = room.users.filter(user => user.id !== req.user.id);
        res.status(200).json({
            room: room,
            message: `${req.user.name} has left the room ${room.name}`
        })


    }catch(err){
      console.log(err);
      return next(createError.InternalServerError());
    }
  },
  async getRooms(req, res, next) {
   try{
    const rooms = await prisma.room.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            createdAt: true,
            updatedAt: true,
            users: {
                select: {
                    id: true,
                    name: true,
                    username: true,
                    email: true,
                    picture: true,
                }
            }
        }
    })
    res.status(200).json(rooms);


   }catch(err){
    console.log(err);
    return next(createError.InternalServerError());
  }
}


};
export default usercontroller;
