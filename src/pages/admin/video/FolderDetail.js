import { Button, Form, Input, Modal } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CautionsCard, CurriculumCard, ModalForm } from "./style";
import SortList from "../../../components/SortList";
import {
  videoContentsListSaveAction,
  videoDetailGetRequestAction,
  videoPutRequestAction,
} from "../../../reducers/admin/video";

const FolderDetail = ({ match }) => {
  const id = match.params.id;
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
    form.setFieldsValue({ title: "" });
  }, [form]);

  const onFinish = useCallback(() => {
    dispatch(videoContentsListSaveAction(form.getFieldValue("title")));
    handleCancel();
  }, [handleCancel, dispatch, form]);

  useEffect(() => {
    dispatch(videoDetailGetRequestAction(id));
  }, []);

  const { videoContent, videoPutLoading } = useSelector(
    (state) => state.adminVideo
  );
  const onSubmit = useCallback(() => {
    if (videoContent.contents.length === 0) {
      alert("목차를 생성해주세요!");
      return;
    }
    dispatch(videoPutRequestAction(videoContent));
  }, [dispatch, videoContent]);
  return (
    <>
      <CurriculumCard
        title={
          <>
            <span>Curriculum - {videoContent.name}</span>
            <Button type="primary" onClick={showModal}>
              목차 작성하기!!
            </Button>
          </>
        }
        bordered={false}
      >
        <SortList />

        <Button
          type="primary"
          htmlType="button"
          onClick={onSubmit}
          loading={videoPutLoading}
        >
          저장
        </Button>
        <Modal
          title="Regist Curriculum Contents"
          footer={null}
          closable={false}
          maskClosable={false}
          visible={isModalVisible}
        >
          <ModalForm onFinish={onFinish} form={form}>
            <Form.Item
              label="제목"
              name="title"
              rules={[{ required: true, message: "제목을 입력해주세요." }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button htmlType="button" onClick={handleCancel}>
                취소
              </Button>
              <Button type="primary" htmlType="submit">
                저장
              </Button>
            </Form.Item>
          </ModalForm>
        </Modal>
      </CurriculumCard>

      <CautionsCard bordered={false}>
        <p>
          1. Curriculum을 다 작성하신 후에 저장을 눌려주세요!!(안누르면
          저장안됩니다.!)
        </p>
        <p>
          2. 잘못 입력하신 경우 삭제하시고 재등록해주세요! (드래그를 통해 순서가
          변경 가능합니다.)
        </p>
      </CautionsCard>
    </>
  );
};

export default FolderDetail;