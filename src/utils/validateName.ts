export const validateName = (name: string): string | null => {
  const numberRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
  if (numberRegex.test(name)) {
    return "Name cannot contain numbers.";
  }
  if (specialCharRegex.test(name)) {
    return "Name cannot contain special characters.";
  }
  return null;
};
