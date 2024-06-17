export const validateEmail = (email: string) => {
  return !String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const validatePassword = (password: string) => {
  //Check that password has at least 5 charecters and 1 number
  const regularExpression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$/;

  if (password.length === 0) {
    return true;
  }
  return !regularExpression.test(password);
};
