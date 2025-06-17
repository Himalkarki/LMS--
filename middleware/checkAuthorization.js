import jwt from "jsonwebtoken";
import{jwtsecretKey} from "../utils/generateToken.js";
export const checkAuthorization =async (req ,res,next) => {
    
    try{
         const token = req?.body?.token
          const decoded = await jwt.verify(token,jwtsecretKey);
          if(!decoded._id){

            return req.json({
                success:false,
                messege:"you are unauthorized!!! ",

            })
          }

            if(!user){
                return req.json ({
                    success:false,
                    messege:"invalid user found or user not found",
                })
            };
            req.user =user;
            next();


    }catch(error){
        console.log(error);
        req.json({
            success:false,
            messege:""
        })
    }
};