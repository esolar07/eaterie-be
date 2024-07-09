import prisma from "../db";
import { createJwt, hashPassword } from "../modules/auth";

export const registerNewUser = async (req, res) => {

    const {
      firstname,
      lastname,
      phone,
      gender,
      email,
      password,
      isBusiness
    } = req.body;

  try {
    const user = await prisma.userProfile.create({
      data: {
        firstName: firstname, 
        lastName : lastname,
        phone    : phone,
        gender   : gender,
        User: {
          create: {
            email: email,
            password: await hashPassword(password),
            isBusiness: isBusiness,
          },
        },
      },
      include : {
        User: true
      }
    });
    console.log(user);
    const userToken = createJwt(user);
    await res.json({ userToken, isBusiness: user.User.isBusiness });
  } catch ($e) {
    console.log($e);
    res.status(500).json($e);
  }
};
