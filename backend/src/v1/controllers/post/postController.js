import prisma from "../../../prisma";
import { customResponse } from "../../../utils/Response";
import { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import { z } from "zod";
const postController = {
  async getRoomsPosts(req, res, next) {
    const { roomID } = req.params.id;
    try {
      const posts = await prisma.post.findMany({
        where: {
          roomID: roomID,
        },
      });
    } catch (err) {}
  },

  async editPost(req, res, next) {
    try {
      const { postId } = req.body;
      const post = await prisma.post.findUnique({
        where: {
          id: postId,
        },
      });
      if (post.userId !== req.user.id) {
        return next(createError.Unauthorized());
      }
      const resp = req.body;
      const updatedPost = await prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          title: resp.title,
          description: resp.description,
          image: resp.image,
        },
      });
      res.json(customResponse(200, updatedPost));
    } catch (err) {
      console.log(err);
      return next(createError.InternalServerError());
    }
  },
  async createPost(req, res, next) {
    try {
      const resp = req.body;
      const post = await prisma.post.create({
        data: {
          ...resp,
          userId: req.user.id,
        },
      });
      res.json(customResponse(200, post));
    } catch (err) {
      console.log(err);
      return next(createError.InternalServerError());
    }
  },
  async getUserPosts(req, res, next) {
    try {
      const posts = await prisma.post.findMany({
        where: {
          userId: req.user.id,
        },
        select: {
          id: true,
          displayImages: true,
          description: true,
          createdAt: true,
          updatedAt: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              picture: true,
            },
          },
        },
      });
      res.json(customResponse(200, posts));
    } catch (err) {
      console.log(err);
      return next(createError.InternalServerError());
    }
  },
  async deletePost(req, res, next) {
    try {
      const { postId } = req.body;
      const post = await prisma.post.findUnique({
        where: {
          id: postId,
        },
      });
      if (post.userId !== req.user.id) {
        return next(createError.Unauthorized());
      }
      await prisma.post.delete({
        where: {
          id: postId,
        },
      });
      res.json(customResponse(200, "Post deleted successfully"));
    } catch (err) {}
  },
};
export default postController;
