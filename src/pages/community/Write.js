import React, { useState } from "react";
import { PageHero } from "../../components/style";
import { Button, Form, Input, Select } from "antd";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { WriteEditor, WriteForm } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { communityPostRequestAction } from "../../reducers/community";

const Write = ({ history }) => {
  const [content, setContet] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const data = { ...values, content };
    console.log("post데이터는?", data);
    dispatch(communityPostRequestAction(data));
  };

  const { communityPostLoading } = useSelector((state) => state.community);

  return (
    <>
      <PageHero>
        <h2>글쓰기</h2>
      </PageHero>

      {/* Form */}
      <WriteForm onFinish={onSubmit}>
        {/* 인풋박스 */}
        <Form.Item name="title">
          <Input placeholder="제목 쓰기" />
        </Form.Item>

        {/* 셀렉터 */}
        <Form.Item name="categoryId">
          <Select name="categoryId" placeholder="카테고리 고르기">
            <Select.Option value={1}>#to-do-list</Select.Option>
            <Select.Option value={2}>#javascript</Select.Option>
            <Select.Option value={3}>#bla-bla</Select.Option>
            <Select.Option value={4}>#html_css</Select.Option>
            <Select.Option value={5}>#python</Select.Option>
            <Select.Option value={6}>#dev_resources</Select.Option>
            <Select.Option value={7}>#jobs</Select.Option>
            <Select.Option value={8}>#side_project</Select.Option>
            <Select.Option value={9}>#react</Select.Option>
            <Select.Option value={10}>#uber_eats</Select.Option>
            <Select.Option value={11}>#hello</Select.Option>
            <Select.Option value={12}>#instaclone</Select.Option>
          </Select>
        </Form.Item>

        <WriteEditor
          editor={ClassicEditor}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContet(data);
          }}
        />
        <Button type="primary" htmlType="submit" loading={communityPostLoading}>
          Submit
        </Button>
      </WriteForm>
    </>
  );
};
export default Write;
