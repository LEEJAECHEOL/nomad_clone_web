import { Col, Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Link } from "react-router-dom";

const MyHeader = () => {
  return (
    <>
      <Header>
        <Row>
          <Col xs={1} sm={1} md={2} lg={2} xl={3}></Col>
          <Col xs={22} sm={22} md={20} lg={20} xl={18}>
            <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/">
                  <img
                    className="logo"
                    src="http://localhost:3000/images/m.svg"
                    alt="logo"
                  />
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
          </Col>
          <Col xs={1} sm={1} md={2} lg={2} xl={3}></Col>
        </Row>
      </Header>
    </>
  );
};

export default MyHeader;
