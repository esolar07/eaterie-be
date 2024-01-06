import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'

export const verifyPassword = (password, hashedPassword) => bcrypt.compare(password, hashedPassword)

export const hashPassword = (password) => bcrypt.hash(password, 5)

export const createJwt  = (user) => {
    return jwt.sign({
            id: user.id,
            email: user.email
        }, process.env.JWT_SECRET
    )
}