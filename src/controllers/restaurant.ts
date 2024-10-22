import prisma from "../db";
import {createAssetFolders} from "./assets";

export const createRestaurant = async (req, res) => {
  try {
    const { restaurantName, restaurantAddress } = req.body;
    const userId = req.headers;
    const restaurant = await prisma.restaurant.create({
      data: {
        r_name: restaurantName,
        r_address: restaurantAddress,
        userId: "2e6e8553-f968-4371-afcd-14c5273a573a"
      }
    })
    let assetFolderResult = await createAssetFolders(restaurantName);
    res.json({ message: 'Restaurant successfully created', restaurant });
  } catch (e) {
    if (e.code === 'P2002') {
      res.status(400).json({ error: 'Unique field violation. Restaurant name already exists' });
    } else {
      res.status(500).json({ error: 'An error occurred while creating the restaurant' });
    }
  }
}