import prisma from "../db";
import { createJwt, hashPassword, verifyPassword } from "../modules/auth";

export const authenticate = async (email: string, password: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    });

    if (!user || !verifyPassword(password, user.password)) {
        throw new Error('Invalid email or password')
    }
    const passwordHash = await hashPassword(password);
    console.log(passwordHash, user.password)
    if (passwordHash === user.password) {
        throw new Error('Invalid password')
    }

    const userToken = createJwt(user);
    return userToken;
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
};
