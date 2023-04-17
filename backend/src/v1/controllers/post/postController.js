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
      const post = await prisma.post.findFirst({
        where: {
          id: req.params.id,
        },
      });
      if (post === null) return next(createError.NotFound());
      if (post.userId !== req.user.id) return next(createError.Unauthorized());
      await prisma.post.update({
        where: {
          id: req.params.id,
        },
        data: req.body,
      });
      res.json(customResponse(200, "Post Updated."));
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
          title: true,
          displayImages: true,
          description: true,
          createdAt: true,
          upvotes: true,
          downvotes: true,
          updatedAt: true,
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
                  email: true,
                  picture: true,
                },
              },
            },
          },
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
  async upvoteComment(req, res, next) {
    try {
      const commentId = req.params.id;
      console.log(req.user?.id);
      const upvote = await prisma.upVoteOnComment.findFirst({
        where: {
          commentId,
          userId: req.user?.id,
        },
      });
      const downvote = await prisma.downVoteOnComment.findFirst({
        where: {
          commentId,
          userId: req.user?.id,
        },
      });
      if (downvote !== null) {
        await prisma.downVoteOnComment.delete({
          where: {
            id: downvote.id,
          },
        });
        await prisma.comment.update({
          where: {
            id: commentId,
          },
          data: {
            downvotes: {
              decrement: 1,
            },
            votes: {
              increment: 1,
            },
          },
        });
      }
      if (upvote === null) {
        await prisma.upVoteOnComment.create({
          data: {
            commentId,
            userId: req.user?.id,
          },
        });
        await prisma.comment.update({
          where: {
            id: commentId,
          },
          data: {
            upvotes: {
              increment: 1,
            },
            votes: {
              increment: 1,
            },
          },
        });
        res.json(customResponse(200, "Comment Upvoted."));
      }
      if (upvote !== null) {
        res.json(customResponse(200, "Already Upvoted."));
      }
    } catch (err) {
      console.log(err);
      return next({
        status: createError.InternalServerError().status,
        message: err,
      });
    }
  },
  async downvoteComment(req, res, next) {
    try {
      const commentId = req.params.id;
      const upvote = await prisma.upVoteOnComment.findFirst({
        where: {
          commentId,
          userId: req.user?.id,
        },
      });
      const downvote = await prisma.downVoteOnComment.findFirst({
        where: {
          commentId,
          userId: req.user?.id,
        },
      });

      if (upvote !== null) {
        await prisma.upVoteOnComment.delete({
          where: {
            id: upvote.id,
          },
        });
        await prisma.comment.update({
          where: {
            id: commentId,
          },
          data: {
            upvotes: {
              decrement: 1,
            },
            votes: {
              decrement: 1,
            },
          },
        });
      }
      if (downvote === null) {
        await prisma.downVoteOnComment.create({
          data: {
            commentId,
            userId: req.user?.id,
          },
        });
        await prisma.comment.update({
          where: {
            id: commentId,
          },
          data: {
            downvotes: {
              increment: 1,
            },
            votes: {
              decrement: 1,
            },
          },
        });
        res.json(customResponse(200, "Comment Downvoted."));
      }
      if (downvote !== null) {
        res.json(customResponse(200, "Already Downvoted."));
      }
    } catch (err) {
      console.log(err);
      return next({
        status: createError.InternalServerError().status,
        message: err,
      });
    }
  },
  async upvotePost(req, res, next) {
    try {
      const PostId = req.params.id;
      const upvote = await prisma.upVoteOnTopic.findFirst({
        where: {
          PostId,
          userId: req.user?.id,
        },
      });
      const downvote = await prisma.downVoteOnTopic.findFirst({
        where: {
          PostId,
          userId: req.user?.id,
        },
      });
      if (downvote !== null) {
        await prisma.downVoteOnTopic.delete({
          where: {
            id: downvote.id,
          },
        });
        await prisma.post.update({
          where: {
            id: PostId,
          },
          data: {
            downvotes: {
              decrement: 1,
            },
            votes: {
              increment: 1,
            },
          },
        });
      }
      if (upvote === null) {
        await prisma.upVoteOnTopic.create({
          data: {
            PostId,
            userId: req.user?.id,
          },
        });
        await prisma.post.update({
          where: {
            id: PostId,
          },
          data: {
            upvotes: {
              increment: 1,
            },
            votes: {
              increment: 1,
            },
          },
        });
        res.json(customResponse(200, "Topic Upvoted."));
      }
      if (upvote !== null) {
        res.json(customResponse(200, "Already Upvoted."));
      }
    } catch (err) {
      console.log(err);
      return next({ status: createError.InternalServerError().status, message: err });
    }
  },
  async downvotePost(req, res, next) {
    try {
      const PostId = req.params.id;
      const upvote = await prisma.upVoteOnTopic.findFirst({
        where: {
          PostId,
          userId: req.user?.id,
        },
      });
      const downvote = await prisma.downVoteOnTopic.findFirst({
        where: {
          PostId,
          userId: req.user?.id,
        },
      });

      if (upvote !== null) {
        await prisma.upVoteOnTopic.delete({
          where: {
            id: upvote.id,
          },
        });
        await prisma.post.update({
          where: {
            id: PostId,
          },
          data: {
            upvotes: {
              decrement: 1,
            },
            votes: {
              decrement: 1,
            },
          },
        });
      }
      if (downvote === null) {
        await prisma.downVoteOnTopic.create({
          data: {
            PostId,
            userId: req.user?.id,
          },
        });
        await prisma.post.update({
          where: {
            id: PostId,
          },
          data: {
            downvotes: {
              increment: 1,
            },
            votes: {
              decrement: 1,
            },
          },
        });
        res.json(customResponse(200, "Topic Downvoted."));
      }
      if (downvote !== null) {
        res.json(customResponse(200, "Already Downvoted."));
      }
    } catch (err) {
      console.log(err);
      return next({ status: createError.InternalServerError().status, message: err });
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
