import { checkPassword } from "@lib";
import { cute } from "@utils";
import { Router } from "express";
import { Genre, IUser, User } from "@models";

const router = Router();

router.post(
  "/register",
  cute(async (req, res, next) => {
    const user: IUser = (await User.create(req.body)).toObject();
    delete user.password;

    //response
    res.json(user);
  })
);

export { router as UserRoutes };
