export const validateTokenIsValid = (token) => {
  const regexExp = /^[a-f0-9]{32}$/gi;
  return regexExp.test(token);
};
