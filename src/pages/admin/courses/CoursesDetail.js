import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";
import React, { memo, useCallback, useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import InputColor from "../../../components/adminCourses/InputColor";
import TextArea from "antd/lib/input/TextArea";
import {
  DivContainer,
  ColorLayout,
  ColorInput,
  ImageSpace,
  InputSpace,
  BasicCard,
  MyCard2,
  MyCard3,
  MyRow,
  SimpleInfoRow,
} from "./style";
import RectangleUpload from "../../../components/adminCourses/RectangleUpload";
import CircleUpload from "../../../components/adminCourses/CircleUpload";
import { useDispatch } from "react-redux";
import { coursesPostRequestAction } from "../../../reducers/admin/courses/courses";

const { Option } = Select;

const CoursesDetail = memo(() => {
  const [background, setBackground] = useState("#fff"); // 배경색
  const [textColor, setTextColor] = useState("#000"); // 배경 바뀐 글자 색

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (values) => {
      values.backgroundColor = background;
      values.textColor = textColor;
      console.log(values);
      dispatch(coursesPostRequestAction(values));
    },
    [background, textColor, dispatch]
  );

  return (
    <DivContainer>
      <Form onFinish={onSubmit}>
        <ColorLayout background={background}>
          <BasicCard title="PreView Image " bordered={false}>
            <ImageSpace direction="vertical" size="large">
              <Form.Item name="preViewImage">
                <RectangleUpload />
              </Form.Item>
            </ImageSpace>
          </BasicCard>
          <BasicCard title="Select Background Color" bordered={false}>
            <InputColor color={background} setColor={setBackground} />
          </BasicCard>

          <BasicCard title="Main Image " bordered={false}>
            <ImageSpace direction="vertical" size="large">
              <Form.Item name="mainImage">
                <RectangleUpload />
              </Form.Item>
            </ImageSpace>
          </BasicCard>
          <BasicCard title="Select Text Color" bordered={false}>
            <InputColor color={textColor} setColor={setTextColor} />
          </BasicCard>
          <BasicCard title="Input Title!!" bordered={false}>
            <Form.Item
              name="title"
              // rules={[{ required: true, message: "Please Input Title!!" }]}
            >
              <ColorInput
                placeholder="Input Title!!"
                style={{ width: "50%" }}
                size="large"
                textcolor={textColor}
              />
            </Form.Item>
          </BasicCard>
          <BasicCard title="Input Sub Title!!" bordered={false}>
            <Form.Item
              name="subTitle"
              // rules={[{ required: true, message: "Please Input SubTitle!!" }]}
            >
              <ColorInput
                placeholder="Input Sub Title!!"
                style={{ width: "50%" }}
                size="large"
                textcolor={textColor}
              />
            </Form.Item>
          </BasicCard>
          <BasicCard title="Select Level!!" bordered={false}>
            <Form.Item
              name="level"
              // rules={[{ required: true, message: "Please select Level!!" }]}
            >
              <Select placeholder="선택" style={{ width: 120 }}>
                <Option value="초급">초급</Option>
                <Option value="중급">중급</Option>
                <Option value="고급">고급</Option>
              </Select>
            </Form.Item>
          </BasicCard>
        </ColorLayout>
        <ColorLayout beforedisplay="block" paddingbottom={50}>
          <MyCard2 bordered={false}>
            <Form.Item name="simpleImage">
              <CircleUpload />
            </Form.Item>
          </MyCard2>
          <MyRow>
            <Col flex="1 1 200px">
              <MyCard3>
                <div>
                  <Form.Item name={["videoInfo", "count"]}>
                    <Input />
                  </Form.Item>
                  <div>개</div>
                </div>
                <div>동영상</div>
              </MyCard3>
            </Col>
            <Col flex="1 1 200px">
              <MyCard3>
                <div>
                  <Form.Item name={["videoInfo", "totalMinute"]}>
                    <Input />
                  </Form.Item>
                  <div>분</div>
                </div>
                <div>강의 분량</div>
              </MyCard3>
            </Col>
          </MyRow>
        </ColorLayout>
        <ColorLayout>
          <BasicCard title="Simple Info" bordered={false}>
            <Form.List name="simpleInfo">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <SimpleInfoRow key={field.key}>
                      <Col flex="2 1 200px">
                        <ImageSpace direction="vertical" size="large">
                          <Form.Item {...field} name={[field.name, "image"]}>
                            <RectangleUpload />
                          </Form.Item>
                        </ImageSpace>
                      </Col>
                      <Col flex="6 1 400px">
                        <Row>
                          <Form.Item
                            {...field}
                            name={[field.name, "title"]}
                            fieldKey={[field.fieldKey, "title"]}
                          >
                            <Input placeholder="Input Title" />
                          </Form.Item>
                        </Row>
                        <Row>
                          <Form.Item
                            {...field}
                            name={[field.name, "content"]}
                            fieldKey={[field.fieldKey, "content"]}
                          >
                            <TextArea placeholder="Input Content" />
                          </Form.Item>
                        </Row>
                      </Col>
                      <Col flex="1 1 100px">
                        <Form.Item
                          {...field}
                          name={[field.name, "reverse"]}
                          fieldKey={[field.fieldKey, "reverse"]}
                          valuePropName="checked"
                        >
                          <Checkbox checked={false}>reverse</Checkbox>
                        </Form.Item>
                      </Col>
                      <MinusCircleOutlined onClick={() => remove(field.name)} />
                    </SimpleInfoRow>
                  ))}
                  <Form.Item>
                    <Button
                      className="simpleInfoAddBtn"
                      onClick={() => add()}
                      icon={<PlusOutlined />}
                    />
                  </Form.Item>
                </>
              )}
            </Form.List>
          </BasicCard>
        </ColorLayout>
        <ColorLayout background={background} beforedisplay="block">
          <BasicCard bordered={false} title="이 정도 수준인 분들 드루와요">
            <Form.List name="levelContent">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <InputSpace key={field.key} align="baseline">
                      <Form.Item
                        {...field}
                        name={[field.name, "content"]}
                        fieldKey={[field.fieldKey, "content"]}
                        rules={[{ required: true, message: "Input Content" }]}
                      >
                        <Input placeholder="Input Content" />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(field.name)} />
                    </InputSpace>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    ></Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </BasicCard>
        </ColorLayout>
        <ColorLayout>
          <BasicCard bordered={false} title="구현하는 기능과 배우는 컨셉">
            <Row>
              <Col flex="1 1 400px">
                <BasicCard title="Concept" bordered={false}>
                  <Form.List name="concept">
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map((field) => (
                          <InputSpace key={field.key} align="baseline">
                            <Form.Item
                              {...field}
                              name={[field.name, "content"]}
                              fieldKey={[field.fieldKey, "content"]}
                              rules={[
                                { required: true, message: "Input Content" },
                              ]}
                            >
                              <Input placeholder="Input Content" />
                            </Form.Item>
                            <MinusCircleOutlined
                              onClick={() => remove(field.name)}
                            />
                          </InputSpace>
                        ))}
                        <Form.Item>
                          <Button
                            type="dashed"
                            onClick={() => add()}
                            block
                            icon={<PlusOutlined />}
                          ></Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                </BasicCard>
              </Col>
              <Col flex="1 1 400px">
                <BasicCard title="Learn Function" bordered={false}>
                  <Form.Item label="name" name={["skill", "name"]}>
                    <Input />
                  </Form.Item>
                  <Form.Item label="section" name={["skill", "section"]}>
                    <Input />
                  </Form.Item>
                  <Form.List name={["skill", "package"]}>
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map((field) => (
                          <InputSpace key={field.key} align="baseline">
                            <Form.Item
                              {...field}
                              label="package"
                              name={[field.name, "content"]}
                              fieldKey={[field.fieldKey, "content"]}
                              rules={[
                                { required: true, message: "Input Content" },
                              ]}
                            >
                              <Input placeholder="Input Content" />
                            </Form.Item>
                            <MinusCircleOutlined
                              onClick={() => remove(field.name)}
                            />
                          </InputSpace>
                        ))}
                        <Form.Item>
                          <Button
                            type="dashed"
                            onClick={() => add()}
                            block
                            icon={<PlusOutlined />}
                          ></Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                </BasicCard>
              </Col>
            </Row>
          </BasicCard>
        </ColorLayout>
        <ColorLayout background={background} beforedisplay="block">
          <BasicCard bordered={false} title="결과적으로, 이 수업 이후 ...">
            <Form.List name="lectureAfter">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <InputSpace key={field.key} align="baseline">
                      <Form.Item
                        {...field}
                        name={[field.name, "content"]}
                        fieldKey={[field.fieldKey, "content"]}
                        rules={[{ required: true, message: "Input Content" }]}
                      >
                        <Input placeholder="Input Content" />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(field.name)} />
                    </InputSpace>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    ></Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </BasicCard>
        </ColorLayout>
        <ColorLayout>
          <BasicCard title="Select Course Curriculum" bordered={false}>
            <Button type="primary">Select Curriculum</Button>
          </BasicCard>
        </ColorLayout>
        <ColorLayout background={background}>
          <BasicCard title="Price" bordered={false}>
            <Form.Item
              name="price"
              // rules={[{ required: true, message: "Please Input Title!!" }]}
            >
              <Input
                placeholder="Input Price"
                style={{ width: "50%" }}
                size="large"
                textcolor={textColor}
              />
            </Form.Item>
          </BasicCard>
        </ColorLayout>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </DivContainer>
  );
});

export default CoursesDetail;
