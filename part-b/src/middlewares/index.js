import { validationResult } from "express-validator";

export default function validateRequest(req,res,next) {
    const errors  = validationResult(req);
    if(!errors.isEmpty()){
        return res.json({
            success: false,
            message: "Validation failed",
            data: {},
            errors:errors.array()
        });
    }

    next();
}