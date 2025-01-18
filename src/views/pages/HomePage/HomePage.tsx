import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import backgroundImg from "../../../assets/imgs/homeImages/home_background.jpg";
import avatar1 from "../../../assets/imgs/homeImages/avatar1.jpg";
import avatar2 from "../../../assets/imgs/homeImages/avatar2.jpg";
import avatar3 from "../../../assets/imgs/homeImages/avatar3.jpg";
import avatar4 from "../../../assets/imgs/homeImages/avatar4.jpg";

// Styled Components
const Container = styled.div`
  overflow: auto;
  width: 100%;
  height: 100vh; /* Đảm bảo chiều cao ít nhất bằng màn hình */

  background-image: url(${backgroundImg});
  background-size: cover; /* Đảm bảo hình nền bao phủ toàn bộ vùng chứa */
  background-position: center; /* Căn giữa hình nền */
  background-repeat: no-repeat; /* Không lặp lại hình nền */
  position: relative;
  font-family: "MuseoModerno", serif;
  padding-top: 1rem;
`;

const Button = styled(Link)`
  z-index: 10;
  background-color: #d9d9d9;
  width: 180px;
  padding: 0.5rem;
  border-radius: 1.5rem;
  text-align: center;
  font-size: 22px;
  cursor: pointer;
  text-decoration: none;
  color: black;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #c4c4c4;
  }

  &:active {
    background-color: #b0b0b0;
  }
`;

const HomePage: React.FC = () => {
  return (
    <Container>
      {/* Navigation Buttons */}
      <div className="w-full flex justify-end space-x-10 pr-10 ">
        <Button to="/login">login</Button>
        <Button to="/register">register</Button>
      </div>

      {/* Title */}
      <div
        className="w-full justify-center flex mt-[-50px] z-5"
        style={{ fontFamily: "'MuseoModerno', cursive" }}
      >
        <div className="text-[250px] text-[103D00] font-extrabold text-[#103D00]">
          T
        </div>
        <div className=" text-[250px]  bg-gradient-to-r from-[#103D00] to-white inline-block text-transparent bg-clip-text font-extrabold">
          extenger
        </div>
      </div>

      {/* Avatars */}
      <div className="mt-[-25px] flex justify-center">
        <img src={avatar1} alt="avatar1" className="w-[200px] rounded-full" />
        <img src={avatar2} alt="avatar2" className="w-[200px] rounded-3xl" />
        <img src={avatar3} alt="avatar3" className="w-[200px] rounded-full" />
        <img src={avatar4} alt="avatar4" className="w-[200px] rounded-3xl" />
      </div>

      {/* Info Cards */}
      <div className="flex justify-end mt-10 w-full">
        <div className="flex flex-col items-end w-[50%]">
          <div className="w-[140px] h-[140px] bg-[#162927] rounded-full mr-[250px] flex flex-col items-center justify-center text-white ">
            <div className="font-bold text-[60px]">1+</div>
            <div className="font-light mt-[-10px] text-[20px]">Countries</div>
          </div>
          <div className="w-[140px] h-[140px] bg-[#32664F] rounded-full mr-[200px] mt-4 flex flex-col items-center justify-center text-white ">
            <div className="font-bold text-[60px]">4+</div>
            <div className="font-light mt-[-10px] text-[20px]">Users</div>
          </div>
        </div>

        <div className="w-[50%]">
          <div
            className="text-white w-[800px] text-[32px] mr-[10%] mt-10"
            style={{ fontFamily: "'Montserrat', cursive" }}
          >
            Textsenger is an advanced messaging app that not only connects you
            with friends and family but also leverages the power of AI to
            enhance your communication experience.
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
