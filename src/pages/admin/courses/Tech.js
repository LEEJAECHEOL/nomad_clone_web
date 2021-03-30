import { UploadOutlined } from "@ant-design/icons";
import { Button, Input, message, Typography, Upload } from "antd";
import { Form } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import AppLayout from "../../../components/AppLayout";
import { techPostRequestAction } from "../../../reducers/admin/courses/tech";
import { WriteForm } from "../../community/style";

const Tech = () => {
  const [fileList, setFileList] = useState([]);
  const meta = {
    title: "title 1",
    contents: "contents 1",
  };

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => formData.append("files", file));

    // FormData의 append의 경우 value에 매개변수로 JSON Object를 받지 않음.
    // JSON Object의 값들을 일일히 string으로 설정해주어야함.
    // string 데이터 입력(metadata)
    for (let key in meta) {
      formData.append(key, meta[key]);
    }
  };

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <AppLayout>
        <h2>태크 등록페이지</h2>
        <>
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
          ,
        </>
      </AppLayout>
    </>
  );
};

export default Tech;
