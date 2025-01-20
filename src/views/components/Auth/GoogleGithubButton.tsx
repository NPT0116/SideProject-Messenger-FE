import React from "react";
import styled from "styled-components";

const Button = styled.button`
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #bdbdbd;
  }
`;

interface GoogleGithubButtonProps {
  children: React.ReactNode;
}

const GoogleGithubButton: React.FC<GoogleGithubButtonProps> = ({
  children,
}) => {
  return (
    <Button className="bg-[#d9d9d9] py-[10px] rounded-xl w-[50%] text-[25px] hover:bg-[#bdbdbd] ">
      {children}
    </Button>
  );
};

export default GoogleGithubButton;
