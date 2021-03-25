import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  faqOneGetRequestAction,
  faqUpdateRequestAction,
} from "../../../reducers/faq";
import { WriteEditor, WriteForm } from "../../community/style";
import { AdminFaqContainer } from "./style";

export default function AdiminFaqUpdate({ match }) {
  const initial = { title: "기본데이터", categoryId: 1 };

  //   무조건 필요한거
  const faqId = match.params.id;
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { faqItem } = useSelector((state) => state.faq);

  //랜더링 끝나고 실행
  useEffect(() => {
    console.log("유즈이펙트 발동?");
    dispatch(faqOneGetRequestAction(faqId));
    form.setFieldsValue({ categoryId: faqItem.faqCategory.title });
    form.setFieldsValue({ title: faqItem.title });
  }, []);

  const [content, setContent] = useState();

  const onSubmit = (values) => {
    const data = { ...values, content, faqId };
    console.log("페이지 데이터", faqId, data);
    dispatch(faqUpdateRequestAction(data));
  };

  //  로그확인용
  console.log("이게 디테일페이지 데이터", faqItem);
  const { faqUpdateLoading } = useSelector((state) => state.faq);
  return (
    <>
      <AdminFaqContainer>
        <WriteForm form={form} initialValues={initial} onFinish={onSubmit}>
          {/* 인풋박스 */}
          <Form.Item name="title">
            <Input placeholder="제목 쓰기" />
          </Form.Item>

          {/* 셀렉터 */}
          <Form.Item name="categoryId">
            <Select placeholder="카테고리 고르기">
              <Select.Option value="1">노마드아카데미</Select.Option>
              <Select.Option value="2">노마드 챌린지</Select.Option>
              <Select.Option value="3">졸업작품 및 후기</Select.Option>
              <Select.Option value="4">노마드 커뮤니티</Select.Option>
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
    </>
  );
}
