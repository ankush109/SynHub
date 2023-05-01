import prisma from "../../../prisma";
import { customResponse } from "../../../utils/Response";
import { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import { usernameSchema } from "../../schemas/index";

import { ZodError, z } from "zod";
const usernameExistsSchema = z
  .object({
    username: usernameSchema,
  })
  .strict();

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
          college: true,
          picture: true,
          roomID: true,
          bio: true,
          phoneNumber: true,
          department: true,
          year: true,
          createdAt: true,
          updatedAt: true,
          facebook: true,
          instagram: true,
          twitter: true,
          linkedin: true,

          room: {
            select: {
              id: true,
              name: true,
              description: true,
              createdAt: true,
              updatedAt: true,
            },
          },
        },
      });

      res.json(customResponse(200, user));
    } catch (err) {
      console.log(err);
      return next(createError.InternalServerError());
    }
  },
  async edituser(req, res, next) {
    const userSchema = z.object({
      name: z.string(),
      username: z.string(),
      bio: z.string(),
      college: z.string(),
      phoneNumber: z.string(),
      department: z.string(),
      year: z.string(),
      facebook: z.string(),
      instagram: z.string(),
      twitter: z.string(),
      linkedin: z.string(),

    });
    try {
      const resp = (req.body);
      const query = {
        id: req.user.id,
      };
      const user = await prisma.user.findFirst({
        where: query,
      });
      const data = {
        ...user,
        ...resp,
      };
      await prisma.user.update({
        where: query,
        data,
      });
      res.json(customResponse(200, "User updated"));
    } catch (err) {
      console.log(err,'err');
      return next(createError.InternalServerError());
    }
  },
  async uploadProfilePicture(req, res, next) {
    const pictureSchema = z.object({
      picture: z.string(),
    });
    try {
      const resp = pictureSchema.parse(req.body);
      const query = {
        id: req.user.id,
      };
      const user = await prisma.user.findFirst({
        where: query,
      });
      const data = { ...user, picture: resp.picture };
      await prisma.user.update({
        where: query,
        data,
      });
      res.json(customResponse(200, "Profile picture updated"));
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
      req.user.roomID = room.id;
      await prisma.user.update({
        where: {
          id: req.user.id,
        },
        data: {
          roomID: room.id,
        },
      });
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
    try {
      const resp = req.body;
      const roomName = resp.roomName;
      const room = await prisma.room.findUnique({
        where: {
          name: roomName,
        },
        select: {
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
      room.users = room.users.filter((user) => user.id !== req.user.id);
      res.status(200).json({
        room: room,
        message: `${req.user.name} has left the room ${room.name}`,
      });
    } catch (err) {
      console.log(err);
      return next(createError.InternalServerError());
    }
  },
  async getRooms(req, res, next) {
    try {
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
            },
          },
        },
      });
      res.status(200).json(rooms);
    } catch (err) {
      console.log(err);
      return next(createError.InternalServerError());
    }
  },
  async getUserByUsername(req, res, next) {
    try {
      const username = req.params.username;
      const user = await prisma.user.findFirst({
        where: {
          username: username,
        },
        select: {
          id: true,
          name: true,
          username: true,
          picture: true,
          bio: true,
          college: true,
          phoneNumber: true,
          department: true,
          year: true,
          createdAt: true,
          updatedAt: true,
          Posts: {
            select: {
              id: true,
              title: true,
              description: true,
              createdAt: true,
              updatedAt: true,
              upvotes: true,
              downvotes: true,

              commentCount: true,
              comments: {
                select: {
                  id: true,
                  description: true,
                  createdAt: true,
                  updatedAt: true,
                  user: {
                    select: {
                      id: true,
                      name: true,
                      username: true,
                      picture: true,
                    },
                  },
                },
              },

              user: {
                select: {
                  id: true,
                  name: true,
                  username: true,
                  picture: true,
                },
              },
            },
          },
        },
      });
      if (user) {
        res.status(200).json(user);
      }
    } catch (err) {
      console.log(err);
      return next(createError.InternalServerError());
    }
  },
  async usernamExists(req, res, next) {
    try {
      await usernameExistsSchema.parseAsync(req.body);
      res.send(customResponse(200, "OK"));
    } catch (err) {
      if (err instanceof ZodError) {
        return next({
          status: createError.InternalServerError().status,
          message: err.issues,
        });
      }
      return next(createError.InternalServerError());
    }
  },
  async getRecommendedUsers(req, res, next) {
    try {
      const user = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          username: true,
          picture: true,
        },
      });
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return next(createError.InternalServerError());
    }
  },
};
export default usercontroller;
