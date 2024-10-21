import prisma from "../db";
import {createJwt, hashPassword} from "../modules/auth";

export const createPost = async (req, res) => {
    const { postTitle, postImage } = req.body;
    const restaurant = await prisma.restaurant.findFirst({
        where: {
            userId: req.user.id
        }
    })

    try {
        const post = await prisma.post.create({
            data: {
                postTitle,
                postImage,

            }
        })
        await res.json({})
    } catch ($e) {
        res.json($e)
    }
}