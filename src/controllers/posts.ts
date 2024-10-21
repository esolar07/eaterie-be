import prisma from "../db";

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
                restaurantId: 1,
            }
        })
        await res.json({})
    } catch ($e) {
        res.json($e)
    }
}

export const getPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany({
            where: {
                status: true
            }
        });
        res.json(posts)
    } catch (e) {
        res.json(e);
    }
}