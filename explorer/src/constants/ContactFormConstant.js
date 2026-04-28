export const CONTACT_FORM_DESCRIPTIONS = {
  heading: "Contact Us",
  description: " Our Sales Teams will reach out to you ASAP!",
};

export const FORM_FIELDS = [
  {
    type: "text",
    name: "name",
    label: "Name",
    required: true,
    autoComplete: "off",
    placeholder: "E.g John Doe",
  },
  {
    type: "select",
    name: "homeTown",
    label: "Your Home Town",
    required: true,
    autoComplete: "off",
  },
  {
    type: "select",
    name: "destination",
    label: "Where would you like to go?",
    required: true,
    autoComplete: "off",
  },
  {
    type: "text",
    name: "contactNumber",
    label: "Contact Number",
    required: true,
    autoComplete: "off",
    placeholder: "E.g 9443663804",
  },
];
