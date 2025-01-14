import React, { useState } from "react";
import styled from "styled-components";
import registerVideo from "../../../assets/auth/register.mp4";

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

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleInputClass = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    e.target.classList.toggle("filled", value !== "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    toggleInputClass(e);
  };

  return (
    <div className="w-full h-[100vh] bg-slate-600 relative">
      <video
        src={registerVideo}
        className="object-cover absolute h-full w-[45%]"
        autoPlay
        loop
        muted
      >
        Your browser does not support the video tag.
      </video>

      <div className="h-[100vh] px-[10%] pt-[30px] w-[55%] absolute right-0 bg-[#2D3250] z-10">
        <div className="flex text-white space-x-4">
          <a href="/login" className="px-4 py-2">
            Log In
          </a>
          <a href="/register" className="px-4 py-2 border-b-2 border-[#F8B179]">
            Sign Up
          </a>
        </div>
        <div className="text-white font-semibold text-[50px] mt-[100px]">
          Create Your Account
        </div>
        <div className="text-white text-[20px] mb-10">
          Start your new journey at{" "}
          <a href="/" className="text-[#F8B179]">
            {" "}
            Textenger
          </a>
        </div>

        {/* First Name and Last Name */}
        <div className="flex space-x-4 mb-4">
          <div className="relative w-1/2">
            <Input
              className="input border border-gray-400 text-white appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600 bg-[#424669]"
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Label
              htmlFor="firstName"
              className="label absolute mb-0 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text"
            >
              First Name
            </Label>
          </div>
          <div className="relative w-1/2">
            <Input
              className="input border border-gray-400 text-white appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600 bg-[#424669]"
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
            />
            <Label
              htmlFor="lastName"
              className="label absolute mb-0 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text"
            >
              Last Name
            </Label>
          </div>
        </div>

        {/* Email */}
        <div className="mb-4 relative">
          <Input
            className="input border border-gray-400 text-white appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600 bg-[#424669]"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Label
            htmlFor="email"
            className="label absolute mb-0 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text"
          >
            Email
          </Label>
        </div>

        {/* Password */}
        <div className="mb-4 relative">
          <Input
            className="input border border-gray-400 text-white appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600 bg-[#424669]"
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Label
            htmlFor="password"
            className="label absolute mb-0 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text"
          >
            Password
          </Label>
        </div>

        {/* Confirm Password */}
        <div className="mb-4 relative">
          <Input
            className="input border border-gray-400 text-white appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600 bg-[#424669]"
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Label
            htmlFor="confirmPassword"
            className="label absolute mb-0 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text"
          >
            Confirm Password
          </Label>
        </div>
        <div className="flex space-x-4 text-white  mt-[20px] mb-[10px]">
          Already have an account? &nbsp;
          <a
            href="/login "
            className="text-[#676F9D] hover:text-[#4b4e69] cursor-pointer"
          >
            {" "}
            Log in
          </a>
        </div>
        <div className="bg-[#F8B179] text-[#2D3252] rounded-md font-bold text-center w-[50%] py-3  cursor-pointer">
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
