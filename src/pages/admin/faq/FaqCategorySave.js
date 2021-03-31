import { Button, Input, Form } from "antd";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../../../components/AppLayout";
import { faqCategoryPostRequestAction } from "../../../reducers/faq";
import { WriteForm } from "../../community/style";
import { AdminFaqContainer } from "./style";

const FaqCategorySave = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const data = { ...values };
    console.log(data);
    dispatch(faqCategoryPostRequestAction(data));
  };
  const { faqCategoryPostLoading } = useSelector((state) => state.category);
  return (
    <>
      <AppLayout>
        <AdminFaqContainer>
          <WriteForm onFinish={onSubmit}>
            <Form.Item name="title">
              <Input placeholder="FAQ 카테고리" />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={faqCategoryPostLoading}
            >
              Submit
            </Button>
          </WriteForm>
        </AdminFaqContainer>
      </AppLayout>
    </>
  );
};

export default FaqCategorySave;
