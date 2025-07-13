export const checkValidData = (email, password, userName = null) => {
  const isEmailValid = email.match(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (userName !== null) {
    const isUserNameValid = /^[A-Za-z]{3,}$/.test(userName);

    if (!isUserNameValid) {
      return "User Name is not valid.";
    }
  }

  if (!isEmailValid) {
    return "Email ID is not valid.";
  }

  if (!isPasswordValid) {
    return "Password is not valid.";
  }
  return null;
};
