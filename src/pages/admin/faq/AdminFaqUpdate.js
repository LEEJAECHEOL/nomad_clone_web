import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button, Form, Input, Select } from "antd";
import FormItem from "antd/lib/form/FormItem";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  faqOneGetRequestAction,
  faqUpdateRequestAction,
} from "../../../reducers/faq";
import { WriteEditor, WriteForm } from "../../community/style";
import { AdminFaqContainer } from "./style";

const AdminFaqUpdate = ({ match }) => {
  //   무조건 필요한거
  const faqId = match.params.id;
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const [content, setContent] = useState("");

  const { faqItem, faqPostLoading } = useSelector((state) => state.faq);

  //랜더링 끝나고 실행
  useEffect(() => {
    dispatch(faqOneGetRequestAction(faqId));
    form.setFieldsValue({ title: faqItem.title });
    form.setFieldsValue({ categoryId: faqItem.faqCategory.title });
  }, []);

  const onSubmit = (values) => {
    const data = { ...values, content };
    dispatch(faqUpdateRequestAction(faqId, data));
  };

  //  로그확인용
  console.log("이게 디테일페이지 데이터", faqItem);

  return (
    <>
      <AdminFaqContainer>
        <WriteForm form={form} onFinish={onSubmit}>
          {/* 인풋박스 */}
          <Form.Item name="title">
            <Input placeholder="제목 쓰기" />
          </Form.Item>

          {/* 셀렉터 */}
          <Form.Item name="categoryId">
            <Select name="categoryId" placeholder="카테고리 고르기">
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
    </>
  );
};

export default AdminFaqUpdate;
