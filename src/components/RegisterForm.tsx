import { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { createUser } from "../api/apiUrl";
import { RegisterFormValues, RegisterFormProps } from "../utils/interface";
import Loading from "./Loading";
import { registerSchema } from "../utils/yup";
import Swal from "sweetalert2";

const RegisterForm: FC<RegisterFormProps> = ({ onSuccess }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (values: RegisterFormValues) => {
    setIsLoading(true);
    try {
      await createUser(values);
      if (onSuccess) {
        onSuccess();
      }
      Swal.fire({
        title: "Success",
        text: "User registered successfully!",
        icon: "success",
        confirmButtonText: "OK",
      }).then((response) => {
        if (response.isConfirmed) {
          navigate("/user");
        }
      });
    } catch (error) {
      console.error("Failed to create user:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to register user",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const initialValues: RegisterFormValues = {
    name: "",
    email: "",
    password: "",
    username: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-80 bg-white  mx-auto mt-10 p-6 border border-gray-300 rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-6">Register</h2>
      <form onSubmit={formik.handleSubmit}>
        {isLoading && <Loading />}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm text-black font-medium"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={`mt-1 bg-white text-black block w-full p-2 border rounded-md shadow-sm ${
              formik.touched.name && formik.errors.name
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="mt-2 text-sm text-red-600">{formik.errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm text-black font-medium"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`mt-1 bg-white text-black block w-full p-2 border rounded-md shadow-sm ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="mt-2 text-sm text-red-600">{formik.errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm text-black font-medium"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`mt-1 bg-white text-black block w-full p-2 border rounded-md shadow-sm ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <button
              type="button"
              className="absolute bg-transparent inset-y-0 right-0 px-3 py-0 flex items-center"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {formik.touched.password && formik.errors.password && (
            <p className="mt-2 text-sm text-red-600">
              {formik.errors.password}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md cursor-pointer"
          disabled={!formik.dirty || !formik.isValid || isLoading}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
