import prisma from "../db";
import {createJwt, hashPassword} from "../modules/auth";

export const createRestaurant= async (req, res) => {
    try {
        const restaurant = await prisma.restaurantUser.create({
            data: {
                ...req.body
            }
        })
        res.json({ message: 'Restaurant user profile created successfully', restaurant });
  } catch (error) {
    if (error.code === 'P2002') {
      res.status(400).json({ error: 'Unique field violation. Contact email, contact phone, or restaurant phone already exists' });
    } else {
      res.status(500).json({ error: 'An error occurred while creating the profile' });
    }
  }
}