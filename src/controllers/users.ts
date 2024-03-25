import prisma from "../db";
import {createJwt, hashPassword} from "../modules/auth";

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