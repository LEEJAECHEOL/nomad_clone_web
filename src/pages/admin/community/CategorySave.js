import { Button, Input, Form } from "antd";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../../../components/AppLayout";
import { categoryPostRequestAction } from "../../../reducers/category";
import { WriteForm } from "../../community/style";
import { AdminFaqContainer } from "../faq/style";

const CategorySave = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const data = { ...values };
    console.log(data);
    dispatch(categoryPostRequestAction(data));
  };
  const { categoryPostLoading } = useSelector((state) => state.category);
  return (
    <>
      <AppLayout>
        <AdminFaqContainer>
          <WriteForm onFinish={onSubmit}>
            <Form.Item name="title">
              <Input placeholder="커뮤니티 카테고리" />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={categoryPostLoading}
            >
              Submit
            </Button>
          </WriteForm>
        </AdminFaqContainer>
      </AppLayout>
    </>
  );
};

export default CategorySave;
