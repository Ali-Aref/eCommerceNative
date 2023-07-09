const UsernameRegex = {
  value: /^[A-Za-z0-9_.j]+$/,
  message: "Only letters and numbers",
};

const NameRegex = {
  // value: /^[a-z ,.'-]+$/i,
  value: /^[a-z ']+$/i,
  message: "Invalid name",
};

const EmailRegex = {
  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  message: "Invalid email address",
};

const PhoneNumberRegex = {
  value:
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
  message: "Invalid phone number",
};

const PasswordRegex = {
  value:
    // /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$|^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  message: "Minimum 8 characters, having letters, numbers & symbols",
};

const OnlyNumbersRegex = {
  value: /^[0-9]+$/,
  message: "Only numbers are valid",
};

const URLRegex = {
  value:
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
  message: "Invalid URL",
};

export {
  NameRegex,
  URLRegex,
  UsernameRegex,
  EmailRegex,
  PhoneNumberRegex,
  PasswordRegex,
  OnlyNumbersRegex,
};
