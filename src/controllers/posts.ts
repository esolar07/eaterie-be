import prisma from "../db";
import {uploadImageInAssetFolder} from "./assets";

export const createPost = async (req, res) => {
    const { postTitle, postImage } = req.body;
    const restaurant = await prisma.restaurant.findFirst({
        where: {
            userId: req.user.id
        }
    })
    // res.json(restaurant.r_name)
    try {
        const uploadImage =  await uploadImageInAssetFolder(postImage,restaurant.r_name )
        res.json(uploadImage)
        const post = await prisma.post.create({
            data: {
                title: postTitle,
                image: uploadImage.secure_url,
                restaurantId: restaurant.id,
                image_public_id: uploadImage.public_id,
                image_secure_url: uploadImage.secure_url
            }
        })
        res.json(uploadImage)
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