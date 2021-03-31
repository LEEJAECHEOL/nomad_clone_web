import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { WriteEditor, WriteForm } from "../../community/style";
import { AdminFaqContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  faqGetRequestAction,
  faqPostRequestAction,
} from "../../../reducers/faq";
import AppLayout from "../../../components/AppLayout";

const FaqWrite = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { faqList, faqPostLoading } = useSelector((state) => state.faq);

  useEffect(() => {
    dispatch(faqGetRequestAction());
  }, []);

  const onSubmit = (values) => {
    dispatch(faqPostRequestAction(values));
  };

  return (
    <>
      <AppLayout>
        <AdminFaqContainer>
          <WriteForm onFinish={onSubmit} form={form}>
            {/* 셀렉터 */}
            <Form.Item name="categoryId">
              <Select name="categoryId" placeholder="카테고리 고르기">
                {faqList.map((list) => (
                  <Select.Option value={list.id}>{list.title}</Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item name="title">
              <Input placeholder="제목" />
            </Form.Item>

            <Form.Item name="content">
              <WriteEditor
                editor={ClassicEditor}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  form.setFieldsValue({ content: data });
                }}
              />
            </Form.Item>

            <Button type="primary" htmlType="submit" loading={faqPostLoading}>
              Submit
            </Button>
          </WriteForm>
        </AdminFaqContainer>
      </AppLayout>
    </>
  );
};

export default FaqWrite;
