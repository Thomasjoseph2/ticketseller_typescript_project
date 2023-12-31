import express, { Request, Response } from 'express'
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-erro';
const router = express.Router();

router.post('api/users/signin',
    [
        body('email')
            .isEmail()
            .withMessage('email must be valid'),
        body('password')
            .trim().notEmpty()
            .withMessage('you must supply a password')
    ],
    (req: Request, res: Response) => {

       const errors=validationResult(req)

       if(!errors.isEmpty()){
         throw new RequestValidationError(errors.array())
       }

    })

export { router as signinRouter } 