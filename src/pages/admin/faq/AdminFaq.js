import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { WriteEditor, WriteForm } from "../../community/style";
import { AdminFaqContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { faqPostRequestAction } from "../../../reducers/faq";

const AdminFaq = ({ history }) => {
  const [content, setContet] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const data = { ...values, content };
    console.log(data);
    dispatch(faqPostRequestAction(data));
  };

  const { faqPostLoading } = useSelector((state) => state.faq);

  return (
    <>
      <AdminFaqContainer>
        <WriteForm onFinish={onSubmit}>
          {/* 셀렉터 */}
          <Form.Item name="category">
            <Select name="category" placeholder="카테고리 고르기">
              <Select.Option value="노마드 아카데미">
                노마드아카데미
              </Select.Option>
              <Select.Option value="노마드 챌린지">노마드 챌린지</Select.Option>
              <Select.Option value="졸업작품 및 후기">
                졸업작품 및 후기
              </Select.Option>
              <Select.Option value="노마드 커뮤니티">
                노마드 커뮤니티
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="gubun">
            <Input placeholder="제목" />
          </Form.Item>

          <WriteEditor
            editor={ClassicEditor}
            onChange={(event, editor) => {
              const data = editor.getData();
              setContet(data);
            }}
          />
          <Button type="primary" htmlType="submit" loading={faqPostLoading}>
            Submit
          </Button>
        </WriteForm>
      </AdminFaqContainer>
    </>
  );
};

export default AdminFaq;
