import { Button, Form, Input, Modal } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  videoAllGetRequestAction,
  videoPostRequestAction,
} from "../../../reducers/admin/video";
import FolderListItem from "../../../components/FolderListItem";
import { CurriculumListCard, ModalForm, VideoList } from "./style";

const FolderList = () => {
  const dispatch = useDispatch();
  const { videoPostLoading, videoPostDone, videoList } = useSelector(
    (state) => state.adminVideo
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
    form.setFieldsValue({ name: "" });
  }, [form]);

  const onFinish = useCallback(() => {
    dispatch(videoPostRequestAction(form.getFieldValue()));
  }, [dispatch, form]);

  useEffect(() => {
    dispatch(videoAllGetRequestAction());
  }, []);

  useEffect(() => {
    if (videoPostDone) {
      handleCancel();
    }
  }, [videoPostDone, handleCancel]);

  return (
    <>
      <CurriculumListCard title="Curriculum List" bordered={false}>
        <VideoList>
          {videoList !== null
            ? videoList.map((folder) => (
                <FolderListItem key={folder.id} folder={folder} />
              ))
            : null}
        </VideoList>
        <Button type="primary" onClick={showModal}>
          폴더 생성하기!!
        </Button>
        <Modal
          title="Regist Curriculum Folder"
          footer={null}
          closable={false}
          maskClosable={false}
          visible={isModalVisible}
        >
          <ModalForm onFinish={onFinish} form={form}>
            <Form.Item
              label="폴더 명"
              name="name"
              rules={[{ required: true, message: "폴더 명을 입력해주세요." }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="button"
                onClick={handleCancel}
                loading={videoPostLoading}
              >
                취소
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                loading={videoPostLoading}
              >
                저장
              </Button>
            </Form.Item>
          </ModalForm>
        </Modal>
      </CurriculumListCard>
    </>
  );
};

export default FolderList;