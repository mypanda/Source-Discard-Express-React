export const validateLoginForm = ({ mail, password }) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);
  return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({ mail, username, password }) => {
  return (
    validatePassword(password) &&
    validateMail(mail) &&
    validateUsername(username)
  );
};

const validateUsername = (username) => {
  return username.length > 2 && username.length < 16;
};

const validatePassword = (password) => {
  return password.length > 6 && password.length < 12;
};

const validateMail = (mail) => {
  const emialPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
  return emialPattern.test(mail);
};
