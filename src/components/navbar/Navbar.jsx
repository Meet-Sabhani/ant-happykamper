import React, { useState } from "react";
import { Flex, Layout, Menu, Select, Space } from "antd";
import { DownloadBtn } from "../../style/DownloadBtn";
import { NavbarStyle } from "./NavbarStyle";

const { Header } = Layout;
const { Option } = Select;

const menuItems = [
  { key: "1", label: "Home" },
  { key: "2", label: "About" },
  { key: "3", label: "Contact" },
  { key: "4", label: "Provider" },
  { key: "5", label: "Parent" },
];

const provinces = ["Zhejiang", "Jiangsu"];
const citiesData = {
  Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
  Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"],
};

export const Navbar = () => {
  const [cities, setCities] = useState(citiesData[provinces[0]]);
  const [selectedCity, setSelectedCity] = useState(citiesData[provinces[0]][0]);

  const handleProvinceChange = (value) => {
    setCities(citiesData[value]);
    setSelectedCity(citiesData[value][0]);
  };

  return (
    <NavbarStyle>
      <Header>
        <Flex justify="space-between">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            {menuItems.map((item) => (
              <Menu.Item key={item.key}>{item.label}</Menu.Item>
            ))}
          </Menu>
          <Space wrap>
            <Select
              defaultValue={provinces[0]}
              style={{ width: 120 }}
              onChange={handleProvinceChange}
            >
              {provinces.map((province) => (
                <Option key={province} value={province}>
                  {province}
                </Option>
              ))}
            </Select>
            <DownloadBtn>Download</DownloadBtn>
          </Space>
        </Flex>
      </Header>
    </NavbarStyle>
  );
};
