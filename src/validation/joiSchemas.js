import Joi from "joi";

export const onboarding = {
  userName: Joi.string().required().min(10),
};

export const messaging = {
  message: Joi.string().required(),
};
