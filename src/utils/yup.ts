import * as Validate from "yup";

export const registerSchema = Validate.object({
  name: Validate.string()
    .min(8, "Username must be at least 8 characters")
    .required("Username is required"),
  email: Validate.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Validate.string()
    .min(8, "Password must be at least 8 characters")
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});
