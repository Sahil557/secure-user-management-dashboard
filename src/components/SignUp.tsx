// src/components/SignUp.tsx
import { Button, InputField, RegisterLink } from '../common';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Perform sign-up logic here
    // For demo purposes, navigate to the Dashboard
    navigate('/dashboard');
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
              <RegisterLink text="Or" link="/signin" linkTo="sign in to your account" />
            </div>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form method="POST" action="#">
                <InputField
                  id="name"
                  type="text"
                  label="Name"
                  placeholder="john Doe"
                  required={true}
                />
                <InputField
                  id="username"
                  type="text"
                  label="Username"
                  placeholder="john_12"
                  required={true}
                />
                <InputField
                  id="email"
                  type="email"
                  label="Email address"
                  placeholder="john.doe@company.com"
                  required={true}
                />
                <InputField
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="•••••••••"
                  required={true}
                />
                <InputField
                  id="password_confirmation"
                  type="password"
                  label="Confirm Password"
                  placeholder="•••••••••"
                  required={true}
                />
                <Button onClick={handleSignUp} children="Create account" className="w-full mt-6" />
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
