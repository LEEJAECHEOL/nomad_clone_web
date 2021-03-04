import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Link } from "react-router-dom";

const MyHeader = () => {
  return (
    <>
      <Header>
        <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">
              <img className="logo" src="./images/m.svg" />
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/courses">Coureses</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/challenges">Challenges</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/community">Community</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/faq">FAQ</Link>
          </Menu.Item>
          <Menu.Item className="header_right" key="6">
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="/join">Join</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
};

export default MyHeader;
