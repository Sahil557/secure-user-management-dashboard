import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { Button, InputField, RegisterLink } from "./common";
import { register } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const status = useSelector((state: any) => state.auth.status);
  const error = useSelector((state: any) => state.auth.error);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // if (password !== passwordConfirmation) {
    //   console.error('Passwords do not match');
    //   return;
    // }

    try {
      await dispatch(register({ email, password })).unwrap();
      navigate("/dashboard");
    } catch (err) {
      if (err instanceof Error) {
        console.error("Sign up failed:", err.message);
      } else {
        console.error("Sign up failed:", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="flex flex-col lg:flex-row flex-1 max-w-screen-xl m-0 sm:m-6 bg-white shadow">
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 flex-1">
          <div className="sm:mx-auto sm:w-full sm:max-w-md lg:flex">
            <img
              className="mx-auto h-10 w-auto mt-2"
              src="https://www.svgrepo.com/show/301692/login.svg"
              alt="Workflow"
            />
            <div>
              <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900">
                Create a new account
              </h2>
              <RegisterLink
                text="Or"
                link="/signin"
                linkTo="sign in to your account"
              />
            </div>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form onSubmit={handleSignUp}>
                <InputField
                  id="name"
                  type="text"
                  label="Name"
                  placeholder="John Doe"
                  // required
                  onChange={(e) => setName(e.target.value)}
                />
                <InputField
                  id="username"
                  type="text"
                  label="Username"
                  placeholder="john_12"
                  // required
                  onChange={(e) => setUsername(e.target.value)}
                />
                <InputField
                  id="email"
                  type="email"
                  label="Email address"
                  placeholder="john.doe@company.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="•••••••••"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputField
                  id="password_confirmation"
                  type="password"
                  label="Confirm Password"
                  placeholder="•••••••••"
                  // required
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <Button
                  type="submit"
                  children="Create account"
                  className="w-full mt-6"
                />
                {error && <div className="text-red-500 mt-4">{error}</div>}
              </form>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 bg-green-100 items-center justify-center">
          <img
            className="h-full"
            src="https://blog.qollabb.com/wp-content/uploads/2023/08/3515462-1024x1024.jpg"
            alt="Workflow"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
