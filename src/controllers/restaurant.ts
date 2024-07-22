import prisma from "../db";
import { hashPassword } from "../modules/auth";

export const createRestaurant = async (req, res) => {
  console.log(req)
  try {
    const {
      phone,
      company_address,
      image,
      name,
      city,
      state,
      zip,
      industry,
      userId
    } = req.body;

    const restaurant = await prisma.restaurant.create({
      data: {
        phone,
        company_address,
        image,
        name,
        city,
        state,
        zip,
        industry
      }
    });

    // Pendiente de ordenar
    // const restaurantUser = await prisma.restaurantUser.create({
    //   data: {
    //     restaurantId: restaurant.id,
    //     userId: userId || 1
    //   }
    // });
    res.json({ message: 'Restaurant user profile created successfully', restaurant });
  } catch (error) {
    if (error.code === 'P2002') {
      res.status(400).json({ error: 'Unique field violation. Contact email, contact phone, or restaurant phone already exists' });
    } else {
      res.status(500).json({ error: 'An error occurred while creating the profile' });
    }
  }
}