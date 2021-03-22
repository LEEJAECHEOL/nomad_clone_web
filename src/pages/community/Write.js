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
        <Form.Item name="category">
          <Select name="category" placeholder="카테고리 고르기">
            <Select.Option value="#to-do-list">#to-do-list</Select.Option>
            <Select.Option value="#javascript">#javascript</Select.Option>
            <Select.Option value="#bla-bla">#bla-bla</Select.Option>
            <Select.Option value="#html_css">#html_css</Select.Option>
            <Select.Option value="#python">#python</Select.Option>
            <Select.Option value="#dev_resources">#dev_resources</Select.Option>
            <Select.Option value="#jobs">#jobs</Select.Option>
            <Select.Option value="#side_project">#side_project</Select.Option>
            <Select.Option value="#react">#react</Select.Option>
            <Select.Option value="#uber_eats">#uber_eats</Select.Option>
            <Select.Option value="#hello">#hello</Select.Option>
            <Select.Option value="#instaclone">#instaclone</Select.Option>
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
