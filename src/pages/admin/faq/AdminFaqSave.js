import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { WriteEditor, WriteForm } from "../../community/style";
import { AdminFaqContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { faqPostRequestAction } from "../../../reducers/faq";
import AppLayout from "../../../components/AppLayout";

const AdminFaq = ({ history }) => {
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const data = { ...values, content };
    console.log(data);
    dispatch(faqPostRequestAction(data));
  };

  const { faqPostLoading } = useSelector((state) => state.faq);

  return (
    <>
      <AppLayout>
        <AdminFaqContainer>
          <WriteForm onFinish={onSubmit}>
            {/* 셀렉터 */}
            <Form.Item name="categoryId">
              <Select name="categoryId" placeholder="카테고리 고르기">
                <Select.Option value="1">노마드아카데미</Select.Option>
                <Select.Option value="2">노마드 챌린지</Select.Option>
                <Select.Option value="3">졸업작품 및 후기</Select.Option>
                <Select.Option value="4">노마드 커뮤니티</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item name="title">
              <Input placeholder="제목" />
            </Form.Item>

            <WriteEditor
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
              }}
            />
            <Button type="primary" htmlType="submit" loading={faqPostLoading}>
              Submit
            </Button>
          </WriteForm>
        </AdminFaqContainer>
      </AppLayout>
    </>
  );
};

export default AdminFaq;
