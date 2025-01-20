import React, { useState } from "react";
import backgroundImg from "../../../assets/imgs/register/register_background.jpg";
import Input from "../../components/Auth/Input";
import GoogleGithubButton from "../../components/Auth/GoogleGithubButton";
import AuthButton from "../../components/Auth/AuthButton";
import useAuth from "../../../hooks/useAuth";

const SignUpPage: React.FC = () => {
  const { signup, loading, error } = useAuth();

  // State lưu trữ dữ liệu đăng ký
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const userData = {
      firstname,
      lastname,
      username,
      // email,
      password,
    };

    await signup(userData); // Gọi hàm signup từ hook
  };
  return (
    <div
      className="flex w-full h-[100vh] p-4"
      style={{ fontFamily: "'Montserrat', cursive" }}
    >
      <div className="w-[45%] py-[50px] px-[120px]">
        <div className="font-extrabold text-center text-[80px]">
          Get started
        </div>

        <div className="flex flex-col space-y-6 mb-4 mt-[30px]">
          <div className="text-[20px]">
            Already have account?{" "}
            <a href="/login" className="font-extrabold text-[#00671A]">
              Sign in
            </a>
          </div>
          <div className="flex space-x-4">
            <div className="w-[50%]">
              {" "}
              <Input
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="first name"
              ></Input>
            </div>
            <div className="w-[50%]">
              {" "}
              <Input
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="last name"
              ></Input>
            </div>
          </div>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
          ></Input>

          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
          ></Input>

          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          ></Input>
        </div>
        <div className="flex space-x-2 w-full items-center justify-center mb-8 mt-8">
          <hr className="w-[40%] h-1 bg-[#D9D9D9]" />
          <div className="text-[25px]">or</div>
          <hr className="w-[40%] h-1 bg-[#D9D9D9]" />
        </div>
        <div className="flex space-x-4 justify-center w-full my-8">
          <GoogleGithubButton>google</GoogleGithubButton>
          <GoogleGithubButton>github</GoogleGithubButton>
        </div>

        {error && <div className="text-red-500 text-center">{error}</div>}
        <AuthButton onClick={handleSignUp} disabled={loading}>
          {loading ? "Signing up..." : "Sign up"}
        </AuthButton>
      </div>

      <div
        className="w-[55%]  rounded-3xl bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      ></div>
    </div>
  );
};

export default SignUpPage;
