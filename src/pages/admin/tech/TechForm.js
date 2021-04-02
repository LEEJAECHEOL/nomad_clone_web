import { UploadOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, Upload } from "antd";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import AppLayout from "../../../components/AppLayout";
import { techPostRequestAction } from "../../../reducers/admin/tech";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const ImageUpload = styled(Upload)`
  display: flex;
  flex-direction: column-reverse;
  .ant-upload-list {
    width: 300px;
    margin-bottom: 5px;
  }
  .ant-upload-list-picture {
    .ant-upload-list-item {
      height: inherit;
    }
    .ant-upload-list-item-thumbnail {
      width: 200px;
      height: 200px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ant-upload-span {
    flex-direction: column;
    text-align: center;
  }
`;
const MyForm = styled(Form)``;

const TechForm = () => {
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState(null);
  const handleBefore = useCallback((file) => {
    setFileList(file);
    return false;
  }, []);

  const onFinish = (values) => {
    values.file = fileList;
    dispatch(techPostRequestAction(values));
  };
  return (
    <>
      <AppLayout>
        <Card title="태크 등록페이지" bordered={false}>
          <MyForm
            {...layout}
            initialValues={{ isFilter: false }}
            onFinish={onFinish}
          >
            <Form.Item
              name="file"
              label="이미지"
              rules={[{ required: true, message: "이미지를 해주세요!" }]}
            >
              <ImageUpload
                name="file"
                listType="picture"
                maxCount={1}
                onPreview={() => false}
                beforeUpload={handleBefore}
              >
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </ImageUpload>
            </Form.Item>
            <Form.Item
              label="제목"
              name="title"
              rules={[{ required: true, message: "제목을 입력해주세요!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="isFilter"
              label="필터사용여부"
              valuePropName="checked"
            >
              <Checkbox></Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 4 }}>
              <Button type="primary" htmlType="submit">
                등록
              </Button>
            </Form.Item>
          </MyForm>
        </Card>
      </AppLayout>
    </>
  );
};

export default TechForm;
