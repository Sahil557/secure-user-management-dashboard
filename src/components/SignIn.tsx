import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, resetStatus } from "../redux/authSlice";
import { AppDispatch } from "../redux/store";
import {
  Button,
  CheckBox,
  InputField,
  SocialButton,
  Separator,
  ForgotPasswordLink,
  RegisterLink,
  Loader,
  Snackbar,
} from "./common";

const SignIn: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const status = useSelector((state: any) => state.auth.status);

  const handleSocialMedia = (type: string) => {
    console.log(`${type} button clicked`);
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(login({ email, password })).unwrap();
      console.log("Login successful:", resultAction);
      navigate("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Login failed:", error.message);
      } else {
        console.error("Login failed:", error);
      }
    }
  };

  const handleRememberMe = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      {status === "loading" && <Loader />}
      {status === "failed" && (
        <Snackbar
          type="failed"
          message="Please enter valid email id or password 🔒"
          onClose={() => dispatch(resetStatus())}
        />
      )}
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
              <form
                onSubmit={(e) => {
                  handleLogin(e);
                }}
              >
                <div className="flex flex-row items-center justify-center">
                  <p className="mb-0 mr-4 text-lg">Sign in with</p>
                  <SocialButton
                    type="facebook"
                    onClick={() => handleSocialMedia("facebook")}
                  />
                  <SocialButton
                    type="twitter"
                    onClick={() => handleSocialMedia("twitter")}
                  />
                  <SocialButton
                    type="linkedin"
                    onClick={() => handleSocialMedia("linkedin")}
                  />
                </div>
                <Separator text="Or" />
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
                  onChange={(e) => setPassword(e?.target.value)}
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
                  <Button children="Login" className="mb-4" type="submit" />
                  <RegisterLink
                    text="Don't have an account?"
                    link="/signup"
                    linkTo="Register"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
