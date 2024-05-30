import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const getDataFromToken = () => {
    try {
        const token = request.cookies.get("token")?.value || "";
        const TOKEN_SECRET = process.env.TOKEN_SECRET;
        const decodeToken = jwt.verify(token, TOKEN_SECRET);
        return decodeToken.id;
    } catch (error) {
        throw new Error("Error in getDataFromToken", error.message)
    }
}
