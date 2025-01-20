import React, { useState } from "react";
import styled from "styled-components";
import backgroundImg from "../../../assets/imgs/login/login_background.jpg";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Input from "../../components/Auth/Input";
import AuthButton from "../../components/Auth/AuthButton";
import GoogleGithubButton from "../../components/Auth/GoogleGithubButton";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useAuth();

  const handleLogin = async () => {
    await login(username, password);
  };

  return (
    <div
      className="overflow-auto w-full h-[100vh] flex justify-center items-center bg-cover bg-center bg-no-repeat relative pt-4"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        fontFamily: "'Montserrat', cursive",
      }}
    >
      <div className="bg-white w-[667px] h-[680px] rounded-3xl py-6 px-10">
        <div
          className="font-black text-[60px] text-center"
          style={{ fontFamily: "'Montserrat', cursive" }}
        >
          Welcome back
        </div>
        <div
          className="text-center text-[20px] mt-[-10px]"
          style={{ fontFamily: "'Montserrat', cursive" }}
        >
          Please enter your details to sign in.
        </div>

        <div className="flex space-x-4 justify-center w-full my-8">
          <GoogleGithubButton>google</GoogleGithubButton>
          <GoogleGithubButton>github</GoogleGithubButton>
        </div>
        <div className="flex space-x-2 w-full items-center justify-center mb-8">
          <hr className="w-[40%] h-1 bg-[#D9D9D9]" />
          <div className="text-[25px]">or</div>
          <hr className="w-[40%] h-1 bg-[#D9D9D9]" />
        </div>
        <div className="flex flex-col space-y-6 mb-4">
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
          ></Input>

          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          ></Input>
        </div>
        <div className="flex justify-between text-[18px] mb-4">
          <div className="flex space-x-2 items-center">
            <input
              type="checkbox"
              className="appearance-none bg-[#D9D9D9] w-5 h-5 rounded-md checked:bg-[#D9D9D9] checked:before:content-['✔'] checked:before:text-black checked:before:text-center checked:before:block checked:before:w-full checked:before:h-full"
            />
            <div>Remember me</div>
          </div>
          <a href="#" className="underline">
            Forgot password?
          </a>
        </div>
        {error && <div className="text-red-500 text-center">{error}</div>}
        <AuthButton onClick={handleLogin} disabled={loading}>
          {loading ? "Loading..." : "Sign In"}
        </AuthButton>
      </div>
    </div>
  );
};

export default LoginPage;
