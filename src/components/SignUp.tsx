import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { Button, InputField, RegisterLink, Snackbar, Dropdown, Loader } from "./common";
import { register, resetStatus } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { validateName } from "../utils/validateName";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const { error, status } = useSelector((state: any) => state.auth);
  const [nameError, setNameError] = useState<string | null>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedName = value.trim().replace(/\s{2,}/g, " ");
    setName(formattedName);
    const error = validateName(formattedName);
    setNameError(error);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (nameError) {
      console.error(nameError);
      return;
    }
    try {
      await dispatch(register({ name, job })).unwrap();
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
      {error && (
        <Snackbar
          type="failed"
          message="OOPS! looks like something went wrong 😮"
          onClose={() => dispatch(resetStatus())}
        />
      )}
      {status === "loading" && <Loader />}
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
                  required
                  onChange={handleNameChange}
                />
                {nameError && (
                  <div className="text-red-600 mb-6 font-semibold">
                    {nameError}
                  </div>
                )}
                <Dropdown
                  id="job"
                  label="Job"
                  required
                  options={[
                    "Software Engineer",
                    "HR Department",
                    "Business Analyst",
                    "QA Analyst",
                    "Other",
                  ]}
                  onChange={(e) => setJob(e.target.value)}
                />
                <Button
                  type="submit"
                  children="Create account"
                  className="w-full mt-6"
                />
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
