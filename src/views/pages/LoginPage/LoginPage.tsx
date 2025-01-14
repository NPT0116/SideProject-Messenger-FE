import React, { useState } from "react";
import styled from "styled-components";
import backgroundImg from "../../../assets/auth/login_background.png";

// Styled Components cho Input và Label
const Input = styled.input`
  transition: border 0.2s ease-in-out;
  min-width: 280px;
  background-color: #424669 !important; /* Đảm bảo luôn giữ màu nền */
  color: white;

  &.filled {
    border-color: #667eea;
  }

  &:focus + .label,
  &:active + .label,
  &.filled + .label {
    font-size: 0.75rem;
    transition: all 0.2s ease-out;
    top: -0.4rem;
    color: #667eea;
  }

  &:autofill,
  &:autofill:hover,
  &:autofill:focus,
  &:autofill:active {
    box-shadow: 0 0 0px 1000px #424669 inset !important; /* Xóa màu nền do autofill */
    -webkit-text-fill-color: white !important; /* Đặt màu chữ */
  }
`;

const Label = styled.label`
  transition: all 0.2s ease-out;
  top: 0.4rem;
  left: 0;
`;

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toggleInputClass = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "username" && value !== "") {
      e.target.classList.add("filled");
    } else if (id === "username" && value === "") {
      e.target.classList.remove("filled");
    }
    if (id === "password" && value !== "") {
      e.target.classList.add("filled");
    } else if (id === "password" && value === "") {
      e.target.classList.remove("filled");
    }
  };

  return (
    <div className="w-full h-[100vh] bg-slate-600 relative">
      <img
        src={backgroundImg}
        className="object-fit absolute top-0 right-0 h-full w-[55%]"
        alt="Background"
      />

      <div className="h-[100vh] px-[10%] pt-[30px] w-[45%] bg-[#2D3250] relative z-10">
        <div className="flex text-white space-x-4">
          <a href="/login" className="px-4 py-2 border-b-2 border-[#F8B179]">
            Log In
          </a>
          <a href="/register" className="px-4 py-2">
            Sign Up
          </a>
        </div>
        <div className="text-white font-semibold text-[50px] mt-[150px]">
          Welcome back!
        </div>
        <div className="text-white text-[20px] mb-10">
          Login to your account
        </div>
        <div className="mb-4 relative">
          <Input
            className="input border border-gray-400 text-white appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600 bg-[#424669]"
            id="username"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              toggleInputClass(e); // Thêm lớp "filled" khi có giá trị
            }}
          />
          <Label
            htmlFor="password"
            className="label absolute mb-0 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text"
          >
            Username
          </Label>
        </div>
        <div className="mb-4 relative">
          <Input
            className="input border border-gray-400 text-white appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600 bg-[#424669]"
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              toggleInputClass(e); // Thêm lớp "filled" khi có giá trị
            }}
          />
          <Label
            htmlFor="password"
            className="label absolute mb-0 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text"
          >
            Password
          </Label>
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2 text-white cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 bg-transparent border-2 border-[#F8B179] rounded appearance-none cursor-pointer relative checked:bg-[#2D3250] checked:before:content-['✓'] checked:before:text-[#F8B179] checked:before:text-lg checked:before:absolute checked:before:top-[-6px] checked:before:left-[50%] checked:before:transform checked:before:-translate-x-[50%]"
            />

            <span>Remember password</span>
          </label>

          <a href="#" className="text-[#676F9D] hover:text-[#4b4e69]">
            Forgot password?
          </a>
        </div>
        <div className="flex space-x-4 text-white  mt-[20px] mb-[10px]">
          Don't have an account? &nbsp;
          <a
            href="/register "
            className="text-[#676F9D] hover:text-[#4b4e69] cursor-pointer"
          >
            {" "}
            Sign up
          </a>
        </div>
        <div className="bg-[#F8B179] text-[#2D3252] rounded-md font-bold text-center w-[50%] py-3">
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
