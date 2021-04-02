import { Input, Form, Button } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../../components/AppLayout";
import { dashBoardGetRequestAction } from "../../reducers/dashboard";
import {
  AccountInfromation,
  AccountInfromationCol,
  AccountInfromationColInput,
  AccountInputBox,
  EditProfileContainer,
  EmailInputBox,
  DeleteAccountCol,
} from "./style";

export default function EditProfile({ match }) {
  const initial = { username: "", name: "", email: "" };

  const userId = match.params.id;
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const { dashBoardItem } = useSelector((state) => state.dashboard);

  useEffect(() => {
    console.log("유즈이펙트 발동?");
    dispatch(dashBoardGetRequestAction(userId));
    form.setFieldsValue({ username: dashBoardItem.username });
    form.setFieldsValue({ name: dashBoardItem.name });
    form.setFieldsValue({ email: dashBoardItem.email });
  }, []);

  const onSubmit = (values) => {
    const data = { ...values, userId };
    console.log("post데이터는?", data);
    // dispatch(communityPostRequestAction(data));
  };

  return (
    <>
      <AppLayout>
        <EditProfileContainer>
          {/* 어카운트정보박스 */}
          <AccountInfromation>
            <AccountInfromationCol span={8}>
              <h2>Account Infromation</h2>
            </AccountInfromationCol>

            {/* 언카운트 정보박스 오른쪽 */}
            <AccountInfromationColInput span={16}>
              <Form
                className="ant-form-vertical"
                form={form}
                initialValues={initial}
                onFinish={onSubmit}
              >
                <AccountInputBox>
                  {/* <Form.Item label="Username" name="username">
                    <Input disabled />
                  </Form.Item> */}
                  <EmailInputBox>
                    <input
                      type="text"
                      value={
                        dashBoardItem !== null ? dashBoardItem.username : null
                      }
                      readOnly="readOnly"
                    />
                  </EmailInputBox>
                  <Form.Item label="Name" name="name">
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
              <EmailInputBox>
                <input
                  type="text"
                  value={dashBoardItem !== null ? dashBoardItem.email : null}
                  readOnly="readOnly"
                />
              </EmailInputBox>
            </AccountInfromationColInput>
          </AccountInfromation>
          {/* 프로필박스 */}
          {/* <AccountInfromation>
            <AccountInfromationCol span={8}>
              <h2>Profile</h2>
            </AccountInfromationCol>
            <AccountInfromationColInput span={16}>
              <Form className="ant-form-vertical">
                <EmailInputBox>
                  <Form.Item label="Avatar">
                    <img
                      src={dashBoardItem !== null ? dashBoardItem.imageUrl : ""}
                      alt=""
                    />
                  </Form.Item>
                  <Form.Item className="AccountUpdate">
                    <Button type="primary" htmlType="submit">
                      Chage Image
                    </Button>
                  </Form.Item>
                </EmailInputBox>
              </Form>
            </AccountInfromationColInput>
          </AccountInfromation> */}
          {/* 딜리트어카운트 */}
          {/* <AccountInfromation>
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
                </EmailInputBox>
              </Form>
            </AccountInfromationColInput>
          </AccountInfromation> */}
        </EditProfileContainer>
      </AppLayout>
    </>
  );
}
