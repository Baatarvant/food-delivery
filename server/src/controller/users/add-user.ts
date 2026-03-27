import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";

export const addUser = async (req: Request, res: Response) => {
  const { email, password, age, phoneNumber } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        age,
        phoneNumber,
      },
    });

    res.json({ user });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

// if(hashed data === original data) {
//  // valid password
// }
