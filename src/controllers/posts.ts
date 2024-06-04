import prisma from "../db";
import {createJwt, hashPassword} from "../modules/auth";

export const createPost = async (req, res) => {
    try {
        const post = await prisma.post.create({
            data: {
                postTitle:req.body.postTitle,
            }
        })
        await res.json({})
    } catch ($e) {
        res.json($e)
    }
}