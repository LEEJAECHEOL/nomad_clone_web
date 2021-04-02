import { UpOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { communityLikePostRequestAction } from "../reducers/community";

const LikeButton = ({ listId, count, state }) => {
  const dispatch = useDispatch();
  const onClickLikes = useCallback((e) => {
    dispatch(communityLikePostRequestAction(listId));
  }, []);

  const LikeButton = styled(Button)`
    position: relative;
    top: -6px;
    height: 58px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  `;

  const ILikeButton = styled(LikeButton)`
    border-color: #40a9ff;
  `;
  return (
    <>
      {state === "false" ? (
        <LikeButton onClick={onClickLikes} size="large">
          <div>
            <UpOutlined />
          </div>
          {count}
        </LikeButton>
      ) : (
        <ILikeButton onClick={onClickLikes} size="large">
          <div>
            <UpOutlined />
          </div>
          {count}
        </ILikeButton>
      )}
    </>
  );
};

export default LikeButton;
