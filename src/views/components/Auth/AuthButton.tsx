import React from "react";
import styled from "styled-components";

const Button = styled.button`
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #807f7f;
  }
`;

interface AuthButtonProps {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  onClick,
  disabled,
  children,
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className="bg-[#555555] text-white text-[25px] w-full py-[15px] rounded-xl hover:bg-[#807f7f]"
    >
      {children}
    </Button>
  );
};

export default AuthButton;
