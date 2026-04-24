const validationRule = {
  name: {
    regex: /^[A-Za-z]{2,50}$/,
    message: "Name must contains only letters and space. ",
  },
  phoneNo: {
    regex: /^[6-9]\d{9}$/,
    message: "Enter a valid phone number.",
  },
};

export const getPlaceOptions = (places) => {
  return places.map((place) => ({
    label: place.city,
    value: place.city.toLowerCase(),
  }));
};

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
