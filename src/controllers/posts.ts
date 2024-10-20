import prisma from "../db";
import {createJwt, hashPassword} from "../modules/auth";

export const createPost = async (req, res) => {
    const { postTitle, postImage } = req.body,
           userId = req.headers.authorization;
    const restaurant = prisma.restaurant.findFirst({
        where: {
            userId: userId
        }
    })
    res.json(userId);

    // try {
    //     const post = await prisma.post.create({
    //         data: {
    //             postTitle: postTitle,
    //             postImage: postImage,
    //             restaurantId: restaurant.
    //         }
    //     })
    //     await res.json({})
    // } catch ($e) {
    //     res.json($e)
    // }
}