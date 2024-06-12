import Navbar from "../../components/Navbar";
import RegisterForm from "../../components/RegisterForm";
const Register = () => {
  return (
    <main>
      <Navbar />
      <div className="w-screen h-screen border-gray-200 flex items-center justify-center">
        <RegisterForm />
      </div>
    </main>
  );
};

export default Register;
