import jwt from "jsonwebtoken"

export const verifyJWT = async (req, res, next) => {
    try {

    } catch (error) {
        return res.status(401).json({})
    }
}