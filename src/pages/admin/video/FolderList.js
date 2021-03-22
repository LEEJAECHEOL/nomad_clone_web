import { FolderOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, List, Modal } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  videoFolderPostRequestAction,
  videoFolderAllGetRequestAction,
} from "../../../reducers/admin/video";
import FolderListItem from "../../../components/FolderListItem";
import { CurriculumCard, ModalForm, VideoList } from "./style";

const FolderList = () => {
  const dispatch = useDispatch();
  const {
    videoFolderPostLoading,
    videoFolderPostDone,
    videoFolderList,
  } = useSelector((state) => state.adminVideo);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
    form.setFieldsValue({ name: "" });
  }, []);

  const onFinish = () => {
    dispatch(videoFolderPostRequestAction(form.getFieldValue()));
  };

  useEffect(() => {
    dispatch(videoFolderAllGetRequestAction());
  }, []);

  useEffect(() => {
    if (videoFolderPostDone) {
      handleCancel();
    }
  }, [videoFolderPostDone]);

  const onClickDelete = (data) => {
    console.log(data);
  };

  return (
    <>
      <CurriculumCard title="Curriculum List" bordered={false}>
        <VideoList>
          {videoFolderList !== null
            ? videoFolderList.map((folder) => (
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
                loading={videoFolderPostLoading}
              >
                취소
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                loading={videoFolderPostLoading}
              >
                저장
              </Button>
            </Form.Item>
          </ModalForm>
        </Modal>
      </CurriculumCard>
    </>
  );
};

export default FolderList;
