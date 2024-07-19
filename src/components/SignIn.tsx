// src/components/SignIn.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  CheckBox,
  InputField,
  SocialButton,
  Separator,
  ForgotPasswordLink,
  RegisterLink,
} from '../common';

const SignIn: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSocialMedia = (type: string) => {
    console.log(`${type} button clicked`);
  };

  const handleLogin = () => {
    // Perform authentication check here
    // For demo purposes, assume authentication is successful
    navigate('/dashboard');
  };

  const handleRememberMe = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <section className="h-screen">
      <div className="h-full lg:p-6 xl:p-6">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="computer"
            />
          </div>
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 lg:pr-16 xl:pr-16">
            <form>
              <div className="flex flex-row items-center justify-center">
                <p className="mb-0 mr-4 text-lg">Sign in with</p>
                <SocialButton
                  type="facebook"
                  onClick={() => handleSocialMedia('facebook')}
                />
                <SocialButton
                  type="twitter"
                  onClick={() => handleSocialMedia('twitter')}
                />
                <SocialButton
                  type="linkedin"
                  onClick={() => handleSocialMedia('linkedin')}
                />
              </div>
              <Separator text="Or" />
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
              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <CheckBox
                    id="exampleCheck2"
                    label="Remember me"
                    checked={isChecked}
                    onChange={handleRememberMe}
                  />
                </div>
                <ForgotPasswordLink />
              </div>
              <div className="text-center">
                <Button onClick={handleLogin} children="Login" className="mb-4"/>
                <RegisterLink text="Don't have an account?" link="/signup" linkTo="Register" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
