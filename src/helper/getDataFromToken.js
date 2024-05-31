import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const getDataFromToken = (request) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    if (!token) {
      throw new Error("No token found in request");
    }

    // Log the token for debugging
    console.log("Retrieved token:", token);

    const TOKEN_SECRET = process.env.TOKEN_SECRET;
    const decodedToken = jwt.verify(token, TOKEN_SECRET);

    // Log the decoded token for debugging
    console.log("Decoded token:", decodedToken);

    // Ensure to return the correct property
    return decodedToken._id;
  } catch (error) {
    throw new Error("Error in getDataFromToken: " + error.message);
  }
};


// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config();

// export const getDataFromToken = () => {
//     try {
//         const token = request.cookies.get("token")?.value || "";
//         const TOKEN_SECRET = process.env.TOKEN_SECRET;
//         const decodeToken = jwt.verify(token, TOKEN_SECRET);
//         return decodeToken.id;
//     } catch (error) {
//         throw new Error("Error in getDataFromToken", error.message)
//     }
// }
