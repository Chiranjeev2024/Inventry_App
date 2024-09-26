import { body, validationResult } from "express-validator";

const validateRequest = async (req, res, next) => {
  
    // 1. Setup the rules for validation
    const rules = [
        body('name').notEmpty().withMessage('Name is required'),
        body('price').isFloat({gt:0}).withMessage('Price must have a positive value'),
        body('imageUrl').isURL().withMessage('Invalid URL'),
    ];

    // 2. run those rules.
    await Promise.all(
        rules.map((rule)=>rule.run(req))
    );


    // 3. check if there are any errors after running the rules.
    var validationError = validationResult(req);

    // 4. if error is present, return the error msg.
  if (!validationError.isEmpty()) {
    return res.render("new-product", { errorMessage: validationError.array()[0].msg });
  }

  next();
};


export default validateRequest;