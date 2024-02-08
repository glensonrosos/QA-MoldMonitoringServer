import jwt from 'jsonwebtoken';

export const auth = async (req,res,next) =>{
    try{

        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth){
            decodedData = jwt.verify(token, 'glensonSalt');

            req.userId = decodedData?.id;
            req.role = decodedData?.role;
            req.department = decodedData?.department?._id;
        }
        next();
    }catch(error){
        console.log(error);
    }
};