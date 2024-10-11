import prisma from "../db";
import {createJwt, hashPassword, verifyPassword} from "../modules/auth";

export const registerNewUser = async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                email: req.body.email,
                password: await hashPassword(req.body.password)
            }
        })
        const userToken = createJwt(user)
        await res.json({userToken})
    } catch ($e) {
        res.json($e)
    }
}

export const signIn = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email
            }
        })
        const validPassword = await verifyPassword(req.body.email, user.password);
        if (!validPassword) {
            res.status(401)
            res.json({message: "Incorrect email or password"})
        }
        const userToken = createJwt(user)
        res.json({message: userToken})
    } catch (e) {
        res.status(400)
        res.json({message: e})
    }
}