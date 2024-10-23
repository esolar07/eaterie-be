import prisma from "../db";
import {uploadImageInAssetFolder} from "./assets";

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
                title: postTitle,
                image: postImage,
                restaurantId: restaurant.id
            }
        })
        res.json(post)
    } catch ($e) {
        res.json($e)
    }
}

export const storeImageInCloudinary = async () => {

}

export const getPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany({
            where: {
                published: true
            }
        });
        res.json(posts)
    } catch (e) {
        res.json(e);
    }
}