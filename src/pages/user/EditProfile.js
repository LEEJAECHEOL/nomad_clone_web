import { Input, Form, Button, Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { Option } from "antd/lib/mentions";
import React from "react";
import {
  AccountInfromation,
  AccountInfromationCol,
  AccountInfromationColInput,
  AccountInputBox,
  EditProfileContainer,
  EmailInputBox,
  DeleteAccountCol,
} from "./style";

export default function EditProfile() {
  return (
    <>
      <EditProfileContainer>
        {/* 어카운트정보박스 */}
        <AccountInfromation>
          <AccountInfromationCol span={8}>
            <h2>Account Infromation</h2>
          </AccountInfromationCol>

          {/* 언카운트 정보박스 오른쪽 */}
          <AccountInfromationColInput span={16}>
            <Form className="ant-form-vertical">
              <AccountInputBox>
                <Form.Item label="Username">
                  <Input />
                </Form.Item>
                <Form.Item label="Name">
                  <Input />
                </Form.Item>
              </AccountInputBox>
              <Form.Item className="AccountUpdate">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </AccountInfromationColInput>
        </AccountInfromation>
        {/* 메일박스 */}
        <AccountInfromation>
          <AccountInfromationCol span={8}>
            <h2>Email</h2>
          </AccountInfromationCol>
          <AccountInfromationColInput span={16}>
            <Form className="ant-form-vertical">
              <EmailInputBox>
                <Form.Item label="Email">
                  <Input />
                </Form.Item>
                <Form.Item className="AccountUpdate">
                  <Button type="primary" htmlType="submit">
                    Chage email
                  </Button>
                </Form.Item>
              </EmailInputBox>
            </Form>
          </AccountInfromationColInput>
        </AccountInfromation>
        {/* 프로필박스 */}
        <AccountInfromation>
          <AccountInfromationCol span={8}>
            <h2>Profile</h2>
          </AccountInfromationCol>
          <AccountInfromationColInput span={16}>
            <Form className="ant-form-vertical">
              <EmailInputBox>
                <Form.Item label="Avatar"></Form.Item>
                <Form.Item className="AccountUpdate">
                  <Button type="primary" htmlType="submit">
                    Chage Image
                  </Button>
                </Form.Item>
              </EmailInputBox>
            </Form>
          </AccountInfromationColInput>
        </AccountInfromation>
        {/* 딜리트어카운트 */}
        <AccountInfromation>
          <DeleteAccountCol span={8}>
            <h2>Delete Account</h2>
          </DeleteAccountCol>
          <AccountInfromationColInput span={16}>
            <Form className="ant-form-vertical">
              <EmailInputBox>
                <p>This is a permanent action and it can't be undone.</p>
                <p>
                  After you delete your account no one will be able to recover
                  it.
                </p>
                <Form.Item className="AccountUpdate">
                  <Button type="primary" htmlType="submit">
                    Delete
                  </Button>
                </Form.Item>
              </EmailInputBox>
            </Form>
          </AccountInfromationColInput>
        </AccountInfromation>
      </EditProfileContainer>
    </>
  );
}
