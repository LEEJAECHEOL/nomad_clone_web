import { Button, Input, Typography } from "antd";
import { Form } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import AppLayout from "../../../components/AppLayout";
import { techPostRequestAction } from "../../../reducers/admin/courses/tech";
import { WriteForm } from "../../community/style";

const Tech = () => {
  const [file, setFile] = useState("");
  const [previewURL, setPreviewURL] = useState("");
  const [preview, setPreview] = useState(null);
  const fileRef = useRef();

  useEffect(() => {
    if (file !== "")
      //처음 파일 등록하지 않았을 때를 방지
      setPreview(<img className="img_preview" src={previewURL}></img>);
    return () => {};
  }, [previewURL]);

  const handleFileOnChange = (event) => {
    //파일 불러오기
    event.preventDefault();
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onloadend = (e) => {
      setFile(file);
      setPreviewURL(reader.result);
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleFileButtonClick = (e) => {
    //버튼 대신 클릭하기
    e.preventDefault();
    fileRef.current.click(); // file 불러오는 버튼을 대신 클릭함
  };
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    const data = { ...values, file };
    console.log(data);
    dispatch(techPostRequestAction(data));
  };

  console.log("ref는", file);
  return (
    <>
      <AppLayout>
        <h2>태크 등록페이지</h2>
        <>
          <div className="priveiw-rapping">{preview}</div>
          <aside className="side">
            <input
              ref={fileRef}
              hidden={true}
              id="file"
              type="file"
              name="file"
              onChange={handleFileOnChange}
            ></input>
            <header className="side-header">
              <Typography
                align="center"
                variant="overline"
                display="block"
                gutterBottom
              >
                Title text
              </Typography>
            </header>
            <div style={{ padding: 10 }}>
              <button onClick={handleFileButtonClick}>UPLOAD</button>
            </div>
          </aside>
          <WriteForm onFinish={onSubmit}>
            <Form.Item name="title">
              <Input placeholder="제목" />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </WriteForm>
        </>
      </AppLayout>
    </>
  );
};

export default Tech;
