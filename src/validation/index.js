import { jValidate } from "./joi";
import { onboarding, messaging } from "./joiSchemas";

export const validate = (type, payload) => {
  console.log(type, payload);
  switch (type) {
    case 1: //onboarding validation
      return jValidate(onboarding, payload);

    case 3:
      //validate new message
      return jValidate(messaging, payload);

    default:
      console.log("Invalid type sent in!");
      break;
  }
};
