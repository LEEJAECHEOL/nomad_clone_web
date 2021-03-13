import React, { useState } from "react";
import { PageHero } from "../../components/style";
import { Form, Input, Select } from "antd";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { WriteEditor, WriteForm } from "./style";

export default function Write() {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <PageHero>
        <h2>글쓰기</h2>
      </PageHero>

      {/* Form */}
      <WriteForm
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        {/* 인풋박스 */}
        <Form.Item>
          <Input placeholder="제목 쓰기" name="title" />
        </Form.Item>

        {/* 셀렉터 */}
        <Form.Item>
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
          data="<p>입력해주세요.</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </WriteForm>
    </>
  );
}
