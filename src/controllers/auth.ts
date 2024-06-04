import prisma from "../db";
import { createJwt, hashPassword, verifyPassword } from "../modules/auth";

export const authenticate = async (req, res) => {
    const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    });
    
    const isPass = await verifyPassword(password, user.password);
    if (!user || !isPass) {
        return res.status(401).json({ error: 'Invalid email or password' });
    }

    const userToken = createJwt(user);
    await res.json({userToken, message: 'User authenticated successfully' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'An error occurred while authenticating the user' });
  }



};
