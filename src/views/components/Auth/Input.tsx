import React from "react";
import styled from "styled-components";

const InputField = styled.input`
  &::placeholder {
    transition: opacity 0.3s ease;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type,
}) => {
  return (
    <InputField
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className="bg-[#d9d9d9] w-full py-[15px] rounded-lg text-center text-[25px] outline-none border-none placeholder:text-black placeholder:text-[25px]"
    />
  );
};

export default Input;
