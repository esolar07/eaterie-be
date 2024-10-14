import prisma from "../db";

export const createRestaurant = async (req, res) => {
  try {
    const { image, restaurantName, restaurantAddress } = req.body;
    const userId = req.header;
    const restaurant = await prisma.restaurant.create({
      data: {
          image,
          restaurantName,
          restaurantAddress,
          userId
      }
    })
    res.json({ message: 'Restaurant successfully created', restaurant });
  } catch (e) {
    if (e.code === 'P2002') {
      res.status(400).json({ error: 'Unique field violation. Restaurant name already exists' });
    } else {
      res.status(500).json({ error: 'An error occurred while creating the restaurant' });
    }
  }
}