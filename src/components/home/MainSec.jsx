import { Space } from "antd";
import React from "react";
import logo from "../../images/LogoRes.webp";
import QR from "../../images/downloadQR.png";
import { MainStyle } from "./MainStyle";

export const MainSec = () => {
  return (
    <MainStyle>
      <img src={logo} alt="" />
      <h1>Discover Endless Adventures for Your Child with Happy Kamper!</h1>
      <p>Empower Your Child's Learning Journey Beyond the Classroom.</p>
      <Space>
        <img src={QR} alt="" />
        <h1>Scan to download Happy Kamper App!</h1>
      </Space>
    </MainStyle>
  );
};
