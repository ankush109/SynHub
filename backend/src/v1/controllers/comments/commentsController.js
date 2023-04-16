import prisma from "../../../prisma";
import { customResponse } from "../../../utils/Response";

import createError from "http-errors";
import { z } from "zod";
const commentSchema = z.object({
  description: z.string(),
  PostId: z.string(),
});
const commentController = {
  async createComment(req, res, next) {
    try {
      const resp = await req.body;
      const data = {
        ...resp,
        userId: req.user.id,
      };
      await prisma.comment.create({ data });
      await prisma.post.update({
        where: { id: data.PostId },
        data: {
          commentCount: { increment: 1 },
        },
      });

      res.status(200).json(customResponse("Comment created successfully"));
    } catch (err) {
      console.log(err);
      return next({
        status: createError.InternalServerError().status,
        message: err,
      });
    }
  },
  async upvotecomment(req, res, next) {},
};
export default commentController;
