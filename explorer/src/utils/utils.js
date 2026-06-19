//validation rule 
const validationRule = {
  name: {
    regex: /^[A-Za-z]{2,50}$/,
    message: "Enter a valid name.",
  },
  phoneNo: {
    regex: /^[6-9]\d{9}$/,
    message: "Enter a valid phone number.",
  },
};

/**
 * to flattened the places array of object to select
 * @param {*} places to flatten select field object
 * @returns flattened object to use in select field
 */
export const getPlaceOptions = (places=[]) => {
  return places.map((place) => ({
    label: place.city,
    value: place.city.toLowerCase(),
  }));
};

/**
 * to check the validation of the input field
 * @param {*} name of the input field
 * @param {*} value of the input field
 * @returns isValid and message 
 */
export const inputValidation = (name, value) => {
  const rule = validationRule[name];
  if (!rule) {
    return {
      valid: false,
      message: "Invalid validation type",
    };
  }
  if (rule.regex && !rule.regex.test(value.trim())) {
    return {
      valid: false,
      message: rule.message,
    };
  }
  return { valid: true, message: "" };
};
