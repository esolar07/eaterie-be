import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'

export const verifyPassword = (password: string, hashedPassword: string) => bcrypt.compare(password, hashedPassword);

export const hashPassword = (password: string) => bcrypt.hash(password, 5);

export const createJwt  = (user: { id: any; email: string; password?: string; }) => {
    return jwt.sign({
            id: user.id,
            email: user.email
        }, process.env.JWT_SECRET
    )
}

export const verifyToken = (req, res, next) => {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
        res.status = 401;
        res.json({message: "Not authenticated."})
        return;
    }
    const [bearer, token] = bearerToken.split(" ");
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (e) {
        res.status = 401;
        res.json({message: "Error: Not authenticated."})
        return;
    }
}