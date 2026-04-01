import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const me = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user?.userId,
    },
    select: {
      email: true,
      phoneNumber: true,
    },
  });

  if (!user) return res.status(400).json({ message: "not found" });

  return res.status(200).json(user);
};
