import Joi from 'joi';

export const AuthSchema = Joi.object().keys({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(20)
    .required(),
  password: Joi.string().required()
});

export const PostSchema = Joi.object().keys({
  title: Joi.string()
    .min(1)
    .required(),
  body: Joi.string()
    .min(1)
    .required()
});

export const CommentSchema = Joi.object().keys({
  text: Joi.string()
    .required()
    .min(1)
    .max(500)
});
