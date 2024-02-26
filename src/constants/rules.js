const registerRules = {
  required: "Type your name first!",
  minLength: {
    message: "Minimum 3 characters",
    value: 3,
  },
  maxLength: {
    message: "Maximum 16 characters",
    value: 16,
  },
};

export { registerRules };
