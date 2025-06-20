 export const checkstaffLevelpermission = async (req,res,next) => {
   try{
     const user =req.user;
     
     if (user.role !=='staff'&& user.role !=='Admin'){
        return req.json({
          success:false,
          messege:"you dont have authorization to perform  this action",
        });
    }
    next();

}catch(error){
    console.log(error);
    res.json({
        success:false,
        messege:error.messege
    })
}

};
  export const checkAdminLevelpermission = async (req,res,next) => {
   try{
     const user =req.user;
     
     if (user.role !=='staff'&& user.role !=='Admin'){
        return req.json({
          success:false,
          messege:"you dont have authorization to perform  this action",
        });
    }
    next();

}catch(error){console.log(error);
    res.json({
        success:false,
        messege:error.messege
    })
}
};

