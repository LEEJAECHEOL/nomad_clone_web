import { Button, Form, Input, Modal } from "antd";
import React, { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryPostRequestAction } from "../reducers/category";
import { ButtonRightModalForm } from "./style";

const CategoryBtn = memo(() => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { categoryPostDone, categoryPostLoading, categoryList } = useSelector(
    (state) => state.category
  );

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
    form.setFieldsValue({ title: "" });
  }, []);
  const onFinish = useCallback((values) => {
    dispatch(categoryPostRequestAction(values));
  }, []);

  useEffect(() => {
    if (categoryPostDone) {
      handleCancel();
    }
  }, [categoryPostDone]);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        카테고리 등록하기!
      </Button>
      <Modal
        title="카테고리 등록하기"
        footer={null}
        closable={false}
        maskClosable={false}
        visible={isModalVisible}
      >
        <ButtonRightModalForm onFinish={onFinish} form={form}>
          <Form.Item
            label="카테고리 명"
            name="title"
            rules={[{ required: true, message: "카테고리명을 입력해주세요." }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="button"
              onClick={handleCancel}
              loading={categoryPostLoading}
            >
              취소
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              loading={categoryPostLoading}
            >
              저장
            </Button>
          </Form.Item>
        </ButtonRightModalForm>
      </Modal>
    </>
  );
});

export default CategoryBtn;
