import { FolderOutlined } from "@ant-design/icons";
import { Button, List } from "antd";
import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { videoFolderDeleteRequestAction } from "../reducers/admin/video";

const FolderListItem = memo(({ folder }) => {
  const dispatch = useDispatch();
  const { videoFolderDeleteLoading } = useSelector((state) => state.adminVideo);
  const onClickDelete = useCallback(() => {
    const data = {
      id: folder.id,
      vimeoFolderId: folder.vimeoFolderId,
    };
    dispatch(videoFolderDeleteRequestAction(data));
  }, [dispatch, folder.id, folder.vimeoFolderId]);

  return (
    <>
      <List.Item key={folder.id}>
        <Link to={`/admin/video/${folder.id}`}>
          <FolderOutlined />
          {folder.name}
        </Link>
        <Button
          danger
          size={"small"}
          onClick={onClickDelete}
          loading={videoFolderDeleteLoading}
        >
          삭제
        </Button>
      </List.Item>
    </>
  );
});

export default FolderListItem;
