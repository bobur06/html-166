import React from "react";
import Navbar from "../Navbar/index";
import { Outlet } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import First from '../../assets/imgs/first.png'
import Second from '../../assets/imgs/second.png'
import Third from '../../assets/imgs/third.png'
import { ImgWrapper, Main } from "./style";


const Layout = () => {
  return (
    <div>
      <Navbar />
      <Main>
        <Carousel className="" ariaLabel="skipping" autoPlay infiniteLoop>
          <ImgWrapper>
            <img src={First} alt="img" />
          </ImgWrapper>
          <ImgWrapper>
            <img src={Second} alt="img" />
          </ImgWrapper>
          <ImgWrapper>
            <img src={Third} alt="img" />
          </ImgWrapper>
        </Carousel>
        <Outlet />
      </Main>
    </div>
  );
};

export default Layout;
