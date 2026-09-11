import { Joi, Segments } from 'celebrate';

export const registerUserSchema = {
  [Segments.BODY]: Joi.object().keys({
    username: Joi.string().trim().optional(),
    email: Joi.string().email().trim().required(),
    password: Joi.string().min(8).required(),
  }),
};

export const loginUserSchema = {
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().trim().required(),
    password: Joi.string().required(),
  }),
};
