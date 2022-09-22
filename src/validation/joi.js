import Joi from "joi";

export const jValidate = (schema, payload) => {
  const j = Joi.object(schema);

  const r = j.validate(payload, { abortEarly: false });

  if (!r.error) {
    return true;
  } else {
    const errorsMod = {};

    r.error.details.forEach((error) => {
      errorsMod[error.context.key] = error.message;
    });

    return errorsMod;
  }
};
