import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../../../components/AppLayout";
import {
  faqGetRequestAction,
  faqOneGetRequestAction,
  faqUpdateRequestAction,
} from "../../../reducers/faq";
import { WriteEditor, WriteForm } from "../../community/style";
import { AdminFaqContainer } from "./style";

export default function FaqUpdate({ match }) {
  const faqId = match.params.id;
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { faqItem, faqList } = useSelector((state) => state.faq);
  const [content, setContent] = useState();

  useEffect(() => {
    dispatch(faqOneGetRequestAction(faqId));
    dispatch(faqGetRequestAction());
  }, []);

  useEffect(() => {
    if (JSON.stringify(faqItem) !== "{}") {
      form.setFieldsValue({
        title: faqItem.title,
        categoryId: faqItem.faqCategory.id,
      });
    }
  }, [faqItem]);

  const onSubmit = (values) => {
    const data = { ...values, content, faqId };
    console.log("페이지 데이터", faqId, data);
    dispatch(faqUpdateRequestAction(data));
  };

  const { faqUpdateLoading } = useSelector((state) => state.faq);
  return (
    <>
      <AppLayout>
        <AdminFaqContainer>
          <WriteForm form={form} onFinish={onSubmit}>
            {/* 인풋박스 */}
            <Form.Item name="title">
              <Input placeholder="제목 쓰기" />
            </Form.Item>

            {/* 셀렉터 */}
            <Form.Item name="categoryId">
              <Select placeholder="카테고리 고르기">
                {faqList.map((list) => (
                  <Select.Option value={list.id}>{list.title}</Select.Option>
                ))}
              </Select>
            </Form.Item>

            <WriteEditor
              // defaultValue={faqItem !== null ? faqItem.content : ""}
              data={faqItem !== null ? faqItem.content : ""}
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
              }}
            />
            <Button type="primary" htmlType="submit" loading={faqUpdateLoading}>
              Submit
            </Button>
          </WriteForm>
        </AdminFaqContainer>
      </AppLayout>
    </>
  );
}
